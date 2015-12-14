angular.module('k-app.services', [])

.factory('Bars', function() {

  // Some fake testing data
  var bars = [{
    id: 0,
    name: 'Évora Manuelina',
    img_path: 'img/manuelina.jpg',
    description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et posuere massa. Nulla facilisi. Pellentesque finibus nisi turpis, nec pretium nisi luctus ac. Morbi rutrum odio nec nisi fermentum tincidunt. Fusce convallis urna non nunc elementum maximus. Nunc dignissim, arcu a vehicula cursus, ante sapien tristique neque, in consequat lectus tellus a nisi. Aliquam erat volutpat. Vivamus ac consectetur urna. Nunc quis hendrerit ex. Sed in vehicula odio. Etiam non porttitor ligula. Phasellus tempus libero et convallis aliquam. Ut non faucibus ex. Integer finibus mollis enim, ut ornare nibh hendrerit at. Duis in blandit ipsum. Etiam sed sagittis ipsum, eu tincidunt tortor.',
    description2: 'Maecenas porta tellus ligula, vel ultrices felis auctor vitae. Nunc consequat fermentum gravida. Donec nec dapibus ex, fringilla vehicula arcu. Nunc ullamcorper, dolor eu scelerisque vestibulum, magna lorem vehicula sem, non condimentum arcu tellus vel nulla. Quisque a eleifend dolor. Proin et sodales enim. Curabitur facilisis porta maximus. Mauris pellentesque mi ante, ut iaculis dui pellentesque rhoncus. Nam sagittis semper ipsum quis mattis. Vivamus tellus nunc, vestibulum id sem non, porta lobortis mauris. Sed commodo tincidunt dignissim. Donec at lectus id neque dictum convallis. Quisque eget elit vel lorem pellentesque finibus id in lacus. Aenean id augue elementum, finibus nisl quis, ornare nisi. Donec sollicitudin ultricies lectus sit amet ultricies.',
    directions: 'Nesta página você encontrará informações sobre como percorrer e desfrutar ao máximo da rota selecionada.',
    geolocation: {lat: 38.572247, lng: -7.907063}
  }, {
    id: 1,
    name: 'Rota dos Frescos',
    img_path: 'img/afrescos.jpg',
    description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et posuere massa. Nulla facilisi. Pellentesque finibus nisi turpis, nec pretium nisi luctus ac. Morbi rutrum odio nec nisi fermentum tincidunt. Fusce convallis urna non nunc elementum maximus. Nunc dignissim, arcu a vehicula cursus, ante sapien tristique neque, in consequat lectus tellus a nisi. Aliquam erat volutpat. Vivamus ac consectetur urna. Nunc quis hendrerit ex. Sed in vehicula odio. Etiam non porttitor ligula. Phasellus tempus libero et convallis aliquam. Ut non faucibus ex. Integer finibus mollis enim, ut ornare nibh hendrerit at. Duis in blandit ipsum. Etiam sed sagittis ipsum, eu tincidunt tortor.',
    description2: 'Maecenas porta tellus ligula, vel ultrices felis auctor vitae. Nunc consequat fermentum gravida. Donec nec dapibus ex, fringilla vehicula arcu. Nunc ullamcorper, dolor eu scelerisque vestibulum, magna lorem vehicula sem, non condimentum arcu tellus vel nulla. Quisque a eleifend dolor. Proin et sodales enim. Curabitur facilisis porta maximus. Mauris pellentesque mi ante, ut iaculis dui pellentesque rhoncus. Nam sagittis semper ipsum quis mattis. Vivamus tellus nunc, vestibulum id sem non, porta lobortis mauris. Sed commodo tincidunt dignissim. Donec at lectus id neque dictum convallis. Quisque eget elit vel lorem pellentesque finibus id in lacus. Aenean id augue elementum, finibus nisl quis, ornare nisi. Donec sollicitudin ultricies lectus sit amet ultricies.',
    directions: 'Nesta página você encontrará informações sobre como percorrer e desfrutar ao máximo da rota selecionada.',
    geolocation: {lat: 38.574247, lng: -7.907063}
  }, {
    id: 2,
    img_path: 'img/renascimento.jpg',
    name: 'Évora renascentista',
    description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et posuere massa. Nulla facilisi. Pellentesque finibus nisi turpis, nec pretium nisi luctus ac. Morbi rutrum odio nec nisi fermentum tincidunt. Fusce convallis urna non nunc elementum maximus. Nunc dignissim, arcu a vehicula cursus, ante sapien tristique neque, in consequat lectus tellus a nisi. Aliquam erat volutpat. Vivamus ac consectetur urna. Nunc quis hendrerit ex. Sed in vehicula odio. Etiam non porttitor ligula. Phasellus tempus libero et convallis aliquam. Ut non faucibus ex. Integer finibus mollis enim, ut ornare nibh hendrerit at. Duis in blandit ipsum. Etiam sed sagittis ipsum, eu tincidunt tortor.',
    description2: 'Maecenas porta tellus ligula, vel ultrices felis auctor vitae. Nunc consequat fermentum gravida. Donec nec dapibus ex, fringilla vehicula arcu. Nunc ullamcorper, dolor eu scelerisque vestibulum, magna lorem vehicula sem, non condimentum arcu tellus vel nulla. Quisque a eleifend dolor. Proin et sodales enim. Curabitur facilisis porta maximus. Mauris pellentesque mi ante, ut iaculis dui pellentesque rhoncus. Nam sagittis semper ipsum quis mattis. Vivamus tellus nunc, vestibulum id sem non, porta lobortis mauris. Sed commodo tincidunt dignissim. Donec at lectus id neque dictum convallis. Quisque eget elit vel lorem pellentesque finibus id in lacus. Aenean id augue elementum, finibus nisl quis, ornare nisi. Donec sollicitudin ultricies lectus sit amet ultricies.',
    directions: 'Nesta página você encontrará informações sobre como percorrer e desfrutar ao máximo da rota selecionada.',
    geolocation: {lat: 38.576247, lng: -7.907063}
  }, {
    id: 3,
    img_path: 'img/gotico.jpg',
    name: 'Na rota da Évora gótica',
    description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et posuere massa. Nulla facilisi. Pellentesque finibus nisi turpis, nec pretium nisi luctus ac. Morbi rutrum odio nec nisi fermentum tincidunt. Fusce convallis urna non nunc elementum maximus. Nunc dignissim, arcu a vehicula cursus, ante sapien tristique neque, in consequat lectus tellus a nisi. Aliquam erat volutpat. Vivamus ac consectetur urna. Nunc quis hendrerit ex. Sed in vehicula odio. Etiam non porttitor ligula. Phasellus tempus libero et convallis aliquam. Ut non faucibus ex. Integer finibus mollis enim, ut ornare nibh hendrerit at. Duis in blandit ipsum. Etiam sed sagittis ipsum, eu tincidunt tortor.',
    description2: 'Maecenas porta tellus ligula, vel ultrices felis auctor vitae. Nunc consequat fermentum gravida. Donec nec dapibus ex, fringilla vehicula arcu. Nunc ullamcorper, dolor eu scelerisque vestibulum, magna lorem vehicula sem, non condimentum arcu tellus vel nulla. Quisque a eleifend dolor. Proin et sodales enim. Curabitur facilisis porta maximus. Mauris pellentesque mi ante, ut iaculis dui pellentesque rhoncus. Nam sagittis semper ipsum quis mattis. Vivamus tellus nunc, vestibulum id sem non, porta lobortis mauris. Sed commodo tincidunt dignissim. Donec at lectus id neque dictum convallis. Quisque eget elit vel lorem pellentesque finibus id in lacus. Aenean id augue elementum, finibus nisl quis, ornare nisi. Donec sollicitudin ultricies lectus sit amet ultricies.',
    directions: 'Nesta página você encontrará informações sobre como percorrer e desfrutar ao máximo da rota selecionada.',
    geolocation: {lat: 38.578247, lng: -7.907063}
  }, {
    id: 4,
    img_path: 'img/barroco.jpg',
    name: 'Évora Barroca',
    description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et posuere massa. Nulla facilisi. Pellentesque finibus nisi turpis, nec pretium nisi luctus ac. Morbi rutrum odio nec nisi fermentum tincidunt. Fusce convallis urna non nunc elementum maximus. Nunc dignissim, arcu a vehicula cursus, ante sapien tristique neque, in consequat lectus tellus a nisi. Aliquam erat volutpat. Vivamus ac consectetur urna. Nunc quis hendrerit ex. Sed in vehicula odio. Etiam non porttitor ligula. Phasellus tempus libero et convallis aliquam. Ut non faucibus ex. Integer finibus mollis enim, ut ornare nibh hendrerit at. Duis in blandit ipsum. Etiam sed sagittis ipsum, eu tincidunt tortor.',
    description2: 'Maecenas porta tellus ligula, vel ultrices felis auctor vitae. Nunc consequat fermentum gravida. Donec nec dapibus ex, fringilla vehicula arcu. Nunc ullamcorper, dolor eu scelerisque vestibulum, magna lorem vehicula sem, non condimentum arcu tellus vel nulla. Quisque a eleifend dolor. Proin et sodales enim. Curabitur facilisis porta maximus. Mauris pellentesque mi ante, ut iaculis dui pellentesque rhoncus. Nam sagittis semper ipsum quis mattis. Vivamus tellus nunc, vestibulum id sem non, porta lobortis mauris. Sed commodo tincidunt dignissim. Donec at lectus id neque dictum convallis. Quisque eget elit vel lorem pellentesque finibus id in lacus. Aenean id augue elementum, finibus nisl quis, ornare nisi. Donec sollicitudin ultricies lectus sit amet ultricies.',
    directions: 'Nesta página você encontrará informações sobre como percorrer e desfrutar ao máximo da rota selecionada.',
    geolocation: {lat: 38.582247, lng: -7.907063}
  }];

  // var bars = [{
  //   id: 0,
  //   name: 'Oficina',
  //   description: 'Oficina descrição aqui...',
  //   directions: 'telefonista, siga aquele bar',
  //   geolocation: {lat: 38.572247, lng: -7.907063}
  // }, {
  //   id: 1,
  //   name: 'Harmonia',
  //   description: 'Harmonia descrição aqui...',
  //   directions: 'telefonista, siga aquele bar',
  //   geolocation: {lat: 38.574247, lng: -7.907063}
  // }, {
  //   id: 2,
  //   name: 'Jah',
  //   description: 'Jah descrição aqui...',
  //   directions: 'telefonista, siga aquele bar',
  //   geolocation: {lat: 38.576247, lng: -7.907063}
  // }, {
  //   id: 3,
  //   name: 'Estrela',
  //   description: 'Estrela descrição aqui...',
  //   directions: 'telefonista, siga aquele bar',
  //   geolocation: {lat: 38.578247, lng: -7.907063}
  // }, {
  //   id: 4,
  //   name: 'Molho Bico',
  //   description: 'Molho Bico descrição aqui...',
  //   directions: 'telefonista, siga aquele bar',
  //   geolocation: {lat: 38.582247, lng: -7.907063}
  // }];

  return {
    all: function() {
      return bars;
    },
    get: function(barId) {
      for (var i = 0; i < bars.length; i++) {
        if (bars[i].id === parseInt(barId)) {
          return bars[i];
        }
      }
      return null;
    }
  };
});
