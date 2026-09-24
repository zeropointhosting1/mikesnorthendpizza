import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MenuNavigation from '@/components/MenuNavigation';
import OrderButton from '@/components/OrderButton';
import { business } from '@/lib/site-config';
import { menuGroups, menuSections, specialtyPizzas } from '@/lib/menu-data';
import { pageMetadata } from '@/lib/seo';
import styles from './menu.module.css';

export const metadata = pageMetadata({
  title: 'Menu',
  description:
    'Our full menu: freshly made pizzas, calzones, grinders, wings, salads, burgers, beer and wine. Find your favorite and call to order.',
  path: '/menu/',
});

function MenuSection({ section }) {
  return (
    <section className={styles.section} id={section.id} aria-labelledby={`${section.id}-title`}>
      <div className={styles.sectionHeading}>
        <h3 id={`${section.id}-title`}>{section.title}</h3>
        {section.price && <span className={styles.sectionPrice}>${section.price} <small>each</small></span>}
      </div>
      {section.subtitle && section.id !== 'build-your-pizza' && <p className={styles.subtitle}>{section.subtitle}</p>}
      {section.sizes && <div className={styles.sizeLabels} aria-hidden="true">{section.sizes.map(size => <span key={size}>{size}</span>)}</div>}
      <ul className={`${styles.items} ${section.items.every(([, price, description]) => !price && !description) ? styles.nameGrid : ''}`}>
        {section.items.map(([name, price, description]) => (
          <li key={name}>
            <div className={`${styles.itemRow} ${Array.isArray(price) ? styles.sizedRow : ''}`}>
              <span className={styles.itemName}>{name}</span>
              {Array.isArray(price) ? price.map((value, index) => <span className={styles.price} key={index}><span className="menu-sr-only">{section.sizes[index]} </span>${value}</span>) : price && <span className={styles.price}>{price.includes('$') ? price : `$${price}`}</span>}
            </div>
            {description && <p className={styles.description}>{description}</p>}
          </li>
        ))}
      </ul>
      {section.notes && <div className={styles.notes}>{section.notes.map(note => <p key={note}>{note}</p>)}</div>}
    </section>
  );
}

export default function MenuPage() {
  return <>
    <Header />
    <main className={styles.menu} id="main">
      <header className={`wrap ${styles.intro}`}>
        <h1>Our menu</h1>
        <div className={styles.orderActions}>
          <OrderButton className="btn btn-primary">Order Online <span className="arrow" aria-hidden="true">&rarr;</span></OrderButton>
          <a className="btn btn-outline" href={business.phoneHref} aria-label={`Call to order: ${business.phone}`}><span className={styles.desktopCall}>Call {business.phone}</span><span className={styles.mobileCall}>Call to Order</span></a>
        </div>
      </header>
      <div className={`wrap ${styles.layout}`}>
        <MenuNavigation groups={menuGroups} />
        <div className={styles.content}>
          {menuGroups.map((group) => <section className={styles.chapter} id={group.id} data-menu-group key={group.id} aria-labelledby={`${group.id}-heading`}>
            <header className={styles.chapterHeading}><h2 id={`${group.id}-heading`}>{group.title}</h2></header>
            <div className={group.id === 'pizza' ? styles.pizzaBuild : styles.sectionGrid}>
              {menuSections.filter(section => section.group === group.id).map(section => <MenuSection key={section.id} section={section} />)}
            </div>
            {group.id === 'pizza' && <section id="specialty-pizzas" className={styles.specialties} aria-labelledby="specialty-title">
              <div className={styles.specialtyHeading}><h3 id="specialty-title">Specialty Pizzas</h3><p><span>10″ <strong>$14.99</strong></span><span>14″ <strong>$21.99</strong></span></p></div>
              <ul className={styles.specialtyList}>{specialtyPizzas.map(([name, description]) => <li key={name}><h4>{name}</h4><p>{description}</p></li>)}</ul>
            </section>}
          </section>)}
          <p className={styles.advisory}>Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness, especially if you have medical conditions.</p>
          <a className={styles.backTop} href="#main">Back to top <span aria-hidden="true">&uarr;</span></a>
        </div>
      </div>
    </main>
    <Footer />
  </>;
}
