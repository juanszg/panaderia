// Official La Miga photography, served from the project's public assets.
const img = {
  rolls: '/img/pan1.PNG',
  basket: '/img/pan3.PNG',
  muffins: '/img/pan4.PNG',
  cookies: '/img/pan5.PNG',
  bread: '/img/pan7.PNG',
  handpicked: '/img/E0AA2AEC-1C9E-4863-A2B7-B6A19AAC3A6C.PNG'
};

export const featured = [
  { id:'panecillos', name:'Panecillos de la Casa', description:'Suaves, dorados y recién horneados cada mañana.', price:58, image:img.rolls },
  { id:'pan-chocolate', name:'Pan de Chocolate', description:'Pan artesanal con una corteza intensa y miga tierna.', price:95, image:img.bread },
  { id:'muffins', name:'Muffins de Azúcar', description:'Esponjosos, delicados y cubiertos con azúcar glass.', price:65, image:img.muffins },
  { id:'galletas', name:'Galletas con Chispas', description:'Crujientes por fuera, suaves por dentro.', price:48, image:img.cookies }
];

export const categories = [
  { name:'Pan recién hecho', items:[featured[0], featured[1], { id:'canasta', name:'Canasta de Pan', description:'Una selección dorada para compartir en casa.', price:72, image:img.basket }] },
  { name:'Pan dulce', items:[featured[2], { id:'panecillos-canasta', name:'Panecillos Dorados', description:'Panecillos suaves hechos en pequeños lotes.', price:64, image:img.basket }] },
  { name:'Galletas', items:[featured[3], { id:'galletas-casa', name:'Galletas de la Casa', description:'Galletas artesanales con chispas de chocolate.', price:48, image:img.cookies }] }
];

export const gallery = [img.rolls, img.handpicked, img.basket, img.muffins, img.cookies, '/img/pan2.PNG', '/img/pan6.PNG', img.bread];
