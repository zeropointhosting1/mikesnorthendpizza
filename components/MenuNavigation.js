'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '@/app/menu/menu.module.css';

export default function MenuNavigation({ groups }) {
  const [active, setActive] = useState(groups[0].id);
  const nav = useRef(null);
  const clickedCategory = useRef(null);
  const scrollTimer = useRef(null);

  useEffect(() => {
    const header = document.querySelector('.site-header');
    const menu = document.getElementById('main');
    const sections = groups.map(group => document.getElementById(group.id));
    let frame = null;
    let offset = 0;
    const update = () => {
      frame = null;
      if (clickedCategory.current) return;
      let current = sections[0].id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= offset) current = section.id;
      }
      setActive(current);
    };
    const schedule = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };
    const finishScroll = () => {
      clearTimeout(scrollTimer.current);
      clickedCategory.current = null;
      schedule();
    };
    const onScroll = () => {
      schedule();
      // Keep the clicked category selected while its anchor scroll is in flight.
      if (clickedCategory.current) {
        clearTimeout(scrollTimer.current);
        scrollTimer.current = setTimeout(finishScroll, 150);
      }
    };
    const measure = () => {
      const headerHeight = header.getBoundingClientRect().height;
      offset = headerHeight + nav.current.parentElement.offsetHeight + 40;
      menu.style.setProperty('--menu-header-height', `${headerHeight}px`);
      schedule();
    };
    const resize = new ResizeObserver(measure);
    resize.observe(header);
    resize.observe(nav.current);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);
    measure();
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(scrollTimer.current);
      resize.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
    };
  }, [groups]);

  // Slide the active pill into view when the category row scrolls sideways.
  useEffect(() => {
    const row = nav.current;
    const link = row.querySelector('[aria-current]');
    if (!link || row.scrollWidth <= row.clientWidth) return;
    const left = link.offsetLeft - (row.clientWidth - link.offsetWidth) / 2;
    row.scrollTo({ left, behavior: 'smooth' });
  }, [active]);

  // Fade the row's edges only while there is more to scroll that way.
  useEffect(() => {
    const row = nav.current;
    const bar = row.parentElement;
    const edges = () => {
      bar.toggleAttribute('data-more-start', row.scrollLeft > 2);
      bar.toggleAttribute('data-more-end', row.scrollLeft + row.clientWidth < row.scrollWidth - 2);
    };
    const resize = new ResizeObserver(edges);
    resize.observe(row);
    row.addEventListener('scroll', edges, { passive: true });
    edges();
    return () => {
      resize.disconnect();
      row.removeEventListener('scroll', edges);
    };
  }, []);

  return <div className={styles.navBar}><nav ref={nav} className={styles.navigation} aria-label="Menu categories">
    {groups.map((group) => <a key={group.id} href={`#${group.id}`} aria-current={active === group.id ? 'location' : undefined} onClick={(event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      clickedCategory.current = group.id;
      setActive(group.id);
      clearTimeout(scrollTimer.current);
      scrollTimer.current = setTimeout(() => { clickedCategory.current = null; }, 1800);
    }}>{group.title}</a>)}
  </nav></div>;
}
