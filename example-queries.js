const UserModel = require('<path to>/models/users');


//query for https://gist.github.com/oakinogundeji/dd36aa05972fb5d59b3dc3bd5834891d
const USER = await UserModel.findOne({username: 'username'}, {photos: 1, _id: 0}).sort({"photos.createdAt": 'desc'}).limit(10);
// the above will search the Users collection for the matching document, return only the photos array while suppressing the _id field, sort by the most recently created photos and limit data to the 10 most recent matches
// the query to retriev the next n photos in the proper order is left to the reader as an exercise

//query for https://gist.github.com/oakinogundeji/bc1259a30233db082c5f91b1f582f8ff
const USER = await UserModel.findOne({username: 'username'}).populate('album', 'photos', {sort: {"photos.createdAt": 'desc'}}).limit(10);
// the above will search the Users collection for the matching document, populate the 'album' field using only the 'photos' data, sort by the most recently created photos and limit data to the 10 most recent matches
// the query to retriev the next n photos in the proper order is left to the reader as an exercise

//query for https://gist.github.com/oakinogundeji/448b09c5aa810e545d801a17947a8667
const USER = await UserModel.findOne({username: 'username'});
// the above will search the Users collection for the matching document, by design the 'photos' array will hold a max of 10 most recent photos