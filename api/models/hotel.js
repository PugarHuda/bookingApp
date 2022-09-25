const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: string,
    required: true,
  },
  city: {
    type: string,
    required: true,
  },
  address: {
    type: string,
    required: true,
  },
  distance: {
    type: string,
    required: true,
  },
  photos: {
    type: [string],
  },
  desc: {
    type: string,
    required: true,
  },
  rating: {
    type: number,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [string],
  },
  cheapestPrice: {
    type: number,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("hotel", HotelSchema);
