/*
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
*/

// Fixture data 
if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  // create two users
  var tomId = Meteor.users.insert({
    profile: { name: 'Tom Coleman' }
  });
  var tom = Meteor.users.findOne(tomId);

  var sachaId = Meteor.users.insert({
    profile: { name: 'Sacha Greif' }
  });
  var sacha = Meteor.users.findOne(sachaId);
 
  var ferozeId = Accounts.createUser({username: 'feroze', password: 'oakhill', profile: {name: 'Feroze Shahpurwala'}});
  var feroze = Meteor.users.findOne(ferozeId);
  var telescopeId = Posts.insert({
    title: 'Introducing Telescope',
    userId: sacha._id,
    author: sacha.profile.name,
    url: 'http://sachagreif.com/introducing-telescope/',
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 2
  });

  Comments.insert({
    postId: telescopeId,
    userId: tom._id,
    author: tom.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'Interesting project Sacha, can I get involved?'
  });

  Comments.insert({
    postId: telescopeId,
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: now - 3 * 3600 * 1000,
    body: 'You sure can Tom!'
  });

  Posts.insert({
    title: 'Meteor',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://meteor.com',
    submitted: now - 10 * 3600 * 1000,
    commentsCount: 0
  });

  Posts.insert({
    title: 'The Meteor Book',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://themeteorbook.com',
    submitted: now - 12 * 3600 * 1000,
    commentsCount: 0
  });

   for (var i = 0; i < 10; i++) {
    Posts.insert({
      title: 'Test post #' + i,
      author: feroze.profile.name,
      userId: feroze._id,
      url: 'http://google.com/?q=test-' + i,
      submitted: now - i * 3600 * 1000,
      commentsCount: 0
    });
  }
}
