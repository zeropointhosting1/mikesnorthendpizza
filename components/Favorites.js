import Image from 'next/image';
import { asset } from '@/lib/base-path';
import { favorites } from '@/lib/site-config';

export default function Favorites() {
  return (
    <section className="favorites" id="menu">
      <div className="wrap">
        <div className="section-head center">
          <p className="eyebrow">Fan Favorites</p>
          <h2>A Few Local Favorites</h2>
        </div>
        <div className="favorites-grid">
          {favorites.map((item) => (
            <article className="favorite-card" key={item.name}>
              <div className="favorite-img">
                <Image src={asset(item.image)} alt={item.alt} width={item.width} height={item.height} sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 380px" />
              </div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
