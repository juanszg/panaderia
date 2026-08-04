// This is the only product source; cards and the order panel use this data.
const img = {
  croissant: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=85',
  bread: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85',
  pastry: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=1000&q=85',
  cake: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85',
  coffee: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85'
};
export const featured = [
  { id:'croissant-mantequilla', name:'Croissant de Mantequilla', description:'Hojaldre dorado, ligero y elaborado cada mañana.', price:58, image:img.croissant },
  { id:'hogaza-campo', name:'Hogaza de Campo', description:'Masa madre, corteza crujiente y miga abierta.', price:95, image:img.bread },
  { id:'roll-canela', name:'Roll de Canela', description:'Canela especiada y glaseado de vainilla.', price:65, image:img.pastry },
  { id:'tarta-almendra', name:'Tarta de Almendra', description:'Frangipane delicado y almendra tostada.', price:78, image:img.cake }
];
export const categories = [
  { name:'Pan recién hecho', items:[featured[1], { id:'baguette', name:'Baguette Clásica', description:'Fermentación lenta y corteza fina.', price:45, image:img.bread }, { id:'focaccia', name:'Focaccia de Romero', description:'Aceite de oliva, sal marina y romero.', price:72, image:img.bread }] },
  { name:'Viennoiserie', items:[featured[0], featured[2], { id:'pain-choco', name:'Pain au Chocolat', description:'Mantequilla francesa y chocolate amargo.', price:64, image:img.croissant }] },
  { name:'Dulces', items:[featured[3], { id:'cheesecake', name:'Cheesecake de Vainilla', description:'Textura sedosa y fruta de temporada.', price:92, image:img.cake }, { id:'galletas', name:'Galletas de Avena', description:'Avena, chocolate y un toque de sal.', price:48, image:img.pastry }] },
  { name:'Bebidas', items:[{ id:'latte', name:'Latte de la Casa', description:'Espresso doble y leche vaporizada.', price:62, image:img.coffee }, { id:'te', name:'Té de Jazmín', description:'Infusión floral servida caliente.', price:54, image:img.coffee }] }
];
export const gallery = [img.bread, img.croissant, img.pastry, img.cake, img.coffee, 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1000&q=85', 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=1000&q=85', 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1000&q=85'];
