if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Setting up mpeg-streamer on Raspberry Pi',
    author: 'Feroze',
    url: 'http://wolfpaulus.com/jounal/embedded/raspberrypi_webcam/'
  });
  
  Posts.insert({
    title: 'Meteor Docs',
    author: 'Feroze',
    url: 'http://docs.meteor.com'
  });
  
  Posts.insert({
    title: 'The Meteor Book',
    author: 'Feroze',
    url: 'http://themeteorbook.com'
  });
}