/*
	This file contains definitions for skyrocket explosion shapes.
	Colours are defined in colors.js which allows us to easily randomise the explosion and colour combinations.
	You can create your own exlosion shapes using tools/designer.html including loading and altering those defined here.
*/
var explosions =
[
	{
	  "name": "Three Ring",
	  "creator": "DouG",
	  "duration": 1,
	  "power": "Power1",
	  "ease": "easeOut",
	  "particles":
	  [
	    {"x": -80, "y": -6, "r": 6, "c": 1, "a": 0.8},
	    {"x": -74, "y": -30, "r": 6, "c": 1, "a": 0.8},
	    {"x": -62, "y": -51, "r": 6, "c": 1, "a": 0.8},
	    {"x": -40, "y": -69, "r": 6, "c": 1, "a": 0.8},
	    {"x": -9, "y": -80, "r": 6, "c": 1, "a": 0.8},
	    {"x": 19, "y": -78, "r": 6, "c": 1, "a": 0.8},
	    {"x": 50, "y": -62, "r": 6, "c": 1, "a": 0.8},
	    {"x": 72, "y": -35, "r": 6, "c": 1, "a": 0.8},
	    {"x": 80, "y": -1, "r": 6, "c": 1, "a": 0.8},
	    {"x": 75, "y": 28, "r": 6, "c": 1, "a": 0.8},
	    {"x": 59, "y": 54, "r": 6, "c": 1, "a": 0.8},
	    {"x": 35, "y": 72, "r": 6, "c": 1, "a": 0.8},
	    {"x": -4, "y": 80, "r": 6, "c": 1, "a": 0.8},
	    {"x": -32, "y": 73, "r": 6, "c": 1, "a": 0.8},
	    {"x": -48, "y": 64, "r": 6, "c": 1, "a": 0.8},
	    {"x": -67, "y": 43, "r": 6, "c": 1, "a": 0.8},
	    {"x": -76, "y": 24, "r": 6, "c": 1, "a": 0.8},
	    {"x": -46, "y": 3, "r": 6, "c": 2, "a": 0.8},
	    {"x": -40, "y": -23, "r": 6, "c": 2, "a": 0.8},
	    {"x": -21, "y": -41, "r": 6, "c": 2, "a": 0.8},
	    {"x": 15, "y": -44, "r": 6, "c": 2, "a": 0.8},
	    {"x": 39, "y": -24, "r": 6, "c": 2, "a": 0.8},
	    {"x": 46, "y": 3, "r": 6, "c": 2, "a": 0.8},
	    {"x": 33, "y": 32, "r": 6, "c": 2, "a": 0.8},
	    {"x": 9, "y": 45, "r": 6, "c": 2, "a": 0.8},
	    {"x": -21, "y": 41, "r": 6, "c": 2, "a": 0.8},
	    {"x": -37, "y": 26, "r": 6, "c": 2, "a": 0.8},
	    {"x": -1, "y": -17, "r": 6, "c": 3, "a": 0.8},
	    {"x": 16, "y": -4, "r": 6, "c": 3, "a": 0.8},
	    {"x": 9, "y": 13, "r": 6, "c": 3, "a": 0.8},
	    {"x": -7, "y": 14, "r": 6, "c": 3, "a": 0.8},
	    {"x": -15, "y": -4, "r": 6, "c": 3, "a": 0.8}
	  ]
  },
  {
	  "name": "3 ring with tails",
	  "creator": "DouG",
	  "duration": 2,
	  "power": "Power4",
	  "ease": "easeOut",
	  "particles":
	  [
	    {"x": -142, "y": -6, "r": 7, "c": 1, "a": 0.8},
	    {"x": 142, "y": -1, "r": 7, "c": 1, "a": 0.8},
	    {"x": 2, "y": -143, "r": 7, "c": 1, "a": 0.8},
	    {"x": -102, "y": -99, "r": 7, "c": 1, "a": 0.8},
	    {"x": 112, "y": -88, "r": 7, "c": 1, "a": 0.8},
	    {"x": -51, "y": -133, "r": 7, "c": 1, "a": 0.8},
	    {"x": -130, "y": -56, "r": 7, "c": 1, "a": 0.8},
	    {"x": 67, "y": -125, "r": 7, "c": 1, "a": 0.8},
	    {"x": 135, "y": -45, "r": 7, "c": 1, "a": 0.8},
	    {"x": 2, "y": 142, "r": 7, "c": 1, "a": 0.8},
	    {"x": 100, "y": 100, "r": 7, "c": 1, "a": 0.8},
	    {"x": -108, "y": 93, "r": 7, "c": 1, "a": 0.8},
	    {"x": -135, "y": 43, "r": 7, "c": 1, "a": 0.8},
	    {"x": -56, "y": 130, "r": 7, "c": 1, "a": 0.8},
	    {"x": 59, "y": 129, "r": 7, "c": 1, "a": 0.8},
	    {"x": 130, "y": 57, "r": 7, "c": 1, "a": 0.8},
	    {"x": -98, "y": -3, "r": 7, "c": 2, "a": 0.8},
	    {"x": 98, "y": 1, "r": 7, "c": 2, "a": 0.8},
	    {"x": -1, "y": -98, "r": 7, "c": 2, "a": 0.8},
	    {"x": -3, "y": 98, "r": 7, "c": 2, "a": 0.8},
	    {"x": 67, "y": 71, "r": 7, "c": 2, "a": 0.8},
	    {"x": -70, "y": -68, "r": 7, "c": 2, "a": 0.8},
	    {"x": 53, "y": -83, "r": 7, "c": 2, "a": 0.8},
	    {"x": -72, "y": 66, "r": 7, "c": 2, "a": 0.8},
	    {"x": -91, "y": 36, "r": 7, "c": 2, "a": 0.8},
	    {"x": -40, "y": 89, "r": 7, "c": 2, "a": 0.8},
	    {"x": 41, "y": 89, "r": 7, "c": 2, "a": 0.8},
	    {"x": 90, "y": 40, "r": 7, "c": 2, "a": 0.8},
	    {"x": 86, "y": -47, "r": 7, "c": 2, "a": 0.8},
	    {"x": -40, "y": -90, "r": 7, "c": 2, "a": 0.8},
	    {"x": -91, "y": -35, "r": 7, "c": 2, "a": 0.8},
	    {"x": -1, "y": 56, "r": 7, "c": 3, "a": 0.8},
	    {"x": -2, "y": -56, "r": 7, "c": 3, "a": 0.8},
	    {"x": 56, "y": -1, "r": 7, "c": 3, "a": 0.8},
	    {"x": -56, "y": 4, "r": 7, "c": 3, "a": 0.8},
	    {"x": -42, "y": -37, "r": 7, "c": 3, "a": 0.8},
	    {"x": 37, "y": 42, "r": 7, "c": 3, "a": 0.8},
	    {"x": 39, "y": -41, "r": 7, "c": 3, "a": 0.8},
	    {"x": -34, "y": 44, "r": 7, "c": 3, "a": 0.8},
	    {"x": -30, "y": 38, "r": 4, "c": 3, "a": 0.8},
	    {"x": -48, "y": 4, "r": 4, "c": 3, "a": 0.8},
	    {"x": -35, "y": -32, "r": 4, "c": 3, "a": 0.8},
	    {"x": -2, "y": -48, "r": 4, "c": 3, "a": 0.8},
	    {"x": 34, "y": -34, "r": 4, "c": 3, "a": 0.8},
	    {"x": 48, "y": -1, "r": 4, "c": 3, "a": 0.8},
	    {"x": 32, "y": 36, "r": 4, "c": 3, "a": 0.8},
	    {"x": -1, "y": 48, "r": 4, "c": 3, "a": 0.8},
	    {"x": -42, "y": 4, "r": 4, "c": 3, "a": 0.8},
	    {"x": -31, "y": -28, "r": 4, "c": 3, "a": 0.8},
	    {"x": -1, "y": -42, "r": 4, "c": 3, "a": 0.8},
	    {"x": 30, "y": -30, "r": 4, "c": 3, "a": 0.8},
	    {"x": 42, "y": -1, "r": 4, "c": 3, "a": 0.8},
	    {"x": 29, "y": 30, "r": 4, "c": 3, "a": 0.8},
	    {"x": 0, "y": 42, "r": 4, "c": 3, "a": 0.8},
	    {"x": -27, "y": 32, "r": 4, "c": 3, "a": 0.8},
	    {"x": -1, "y": -34, "r": 4, "c": 3, "a": 0.8},
	    {"x": -26, "y": -22, "r": 4, "c": 3, "a": 0.8},
	    {"x": -34, "y": 4, "r": 4, "c": 3, "a": 0.8},
	    {"x": -22, "y": 26, "r": 4, "c": 3, "a": 0.8},
	    {"x": 1, "y": 34, "r": 4, "c": 3, "a": 0.8},
	    {"x": 24, "y": 24, "r": 4, "c": 3, "a": 0.8},
	    {"x": 34, "y": 0, "r": 4, "c": 3, "a": 0.8},
	    {"x": 0, "y": -88, "r": 4, "c": 2, "a": 0.8},
	    {"x": 48, "y": -74, "r": 4, "c": 2, "a": 0.8},
	    {"x": 78, "y": -41, "r": 4, "c": 2, "a": 0.8},
	    {"x": 88, "y": 2, "r": 4, "c": 2, "a": 0.8},
	    {"x": 81, "y": 35, "r": 4, "c": 2, "a": 0.8},
	    {"x": 60, "y": 64, "r": 4, "c": 2, "a": 0.8},
	    {"x": 38, "y": 79, "r": 4, "c": 2, "a": 0.8},
	    {"x": -2, "y": 88, "r": 4, "c": 2, "a": 0.8},
	    {"x": -37, "y": 80, "r": 4, "c": 2, "a": 0.8},
	    {"x": -65, "y": 60, "r": 4, "c": 2, "a": 0.8},
	    {"x": -82, "y": 33, "r": 4, "c": 2, "a": 0.8},
	    {"x": -88, "y": -3, "r": 4, "c": 2, "a": 0.8},
	    {"x": -82, "y": -31, "r": 4, "c": 2, "a": 0.8},
	    {"x": -64, "y": -60, "r": 4, "c": 2, "a": 0.8},
	    {"x": -37, "y": -80, "r": 4, "c": 2, "a": 0.8},
	    {"x": -59, "y": -54, "r": 4, "c": 2, "a": 0.8},
	    {"x": -34, "y": -72, "r": 4, "c": 2, "a": 0.8},
	    {"x": -1, "y": -80, "r": 4, "c": 2, "a": 0.8},
	    {"x": 43, "y": -67, "r": 4, "c": 2, "a": 0.8},
	    {"x": 71, "y": -37, "r": 4, "c": 2, "a": 0.8},
	    {"x": 80, "y": 3, "r": 4, "c": 2, "a": 0.8},
	    {"x": 74, "y": 31, "r": 4, "c": 2, "a": 0.8},
	    {"x": 55, "y": 58, "r": 4, "c": 2, "a": 0.8},
	    {"x": 36, "y": 72, "r": 4, "c": 2, "a": 0.8},
	    {"x": -3, "y": 80, "r": 4, "c": 2, "a": 0.8},
	    {"x": -33, "y": 73, "r": 4, "c": 2, "a": 0.8},
	    {"x": -59, "y": 54, "r": 4, "c": 2, "a": 0.8},
	    {"x": -74, "y": 30, "r": 4, "c": 2, "a": 0.8},
	    {"x": -80, "y": -3, "r": 4, "c": 2, "a": 0.8},
	    {"x": -75, "y": -29, "r": 4, "c": 2, "a": 0.8},
	    {"x": -124, "y": 41, "r": 4, "c": 1, "a": 0.8},
	    {"x": -131, "y": -5, "r": 4, "c": 1, "a": 0.8},
	    {"x": -121, "y": -51, "r": 4, "c": 1, "a": 0.8},
	    {"x": -94, "y": -91, "r": 4, "c": 1, "a": 0.8},
	    {"x": -48, "y": -122, "r": 4, "c": 1, "a": 0.8},
	    {"x": 2, "y": -131, "r": 4, "c": 1, "a": 0.8},
	    {"x": 62, "y": -115, "r": 4, "c": 1, "a": 0.8},
	    {"x": 103, "y": -80, "r": 4, "c": 1, "a": 0.8},
	    {"x": 124, "y": -41, "r": 4, "c": 1, "a": 0.8},
	    {"x": 131, "y": 0, "r": 4, "c": 1, "a": 0.8},
	    {"x": 120, "y": 52, "r": 4, "c": 1, "a": 0.8},
	    {"x": 92, "y": 93, "r": 4, "c": 1, "a": 0.8},
	    {"x": 55, "y": 119, "r": 4, "c": 1, "a": 0.8},
	    {"x": 2, "y": 131, "r": 4, "c": 1, "a": 0.8},
	    {"x": -50, "y": 121, "r": 4, "c": 1, "a": 0.8},
	    {"x": -98, "y": 87, "r": 4, "c": 1, "a": 0.8},
	    {"x": -114, "y": -47, "r": 4, "c": 1, "a": 0.8},
	    {"x": -88, "y": -86, "r": 4, "c": 1, "a": 0.8},
	    {"x": -45, "y": -114, "r": 4, "c": 1, "a": 0.8},
	    {"x": 1, "y": -123, "r": 4, "c": 1, "a": 0.8},
	    {"x": 59, "y": -108, "r": 4, "c": 1, "a": 0.8},
	    {"x": 98, "y": -74, "r": 4, "c": 1, "a": 0.8},
	    {"x": 117, "y": -38, "r": 4, "c": 1, "a": 0.8},
	    {"x": 123, "y": 1, "r": 4, "c": 1, "a": 0.8},
	    {"x": 113, "y": 49, "r": 4, "c": 1, "a": 0.8},
	    {"x": 86, "y": 88, "r": 4, "c": 1, "a": 0.8},
	    {"x": 52, "y": 111, "r": 4, "c": 1, "a": 0.8},
	    {"x": 2, "y": 123, "r": 4, "c": 1, "a": 0.8},
	    {"x": -46, "y": 114, "r": 4, "c": 1, "a": 0.8},
	    {"x": -117, "y": 39, "r": 4, "c": 1, "a": 0.8},
	    {"x": -92, "y": 81, "r": 4, "c": 1, "a": 0.8},
	    {"x": -123, "y": -4, "r": 4, "c": 1, "a": 0.8}
	  ]
  },
  {
	"name": "neil",
	"creator": "Neil Sparrow",
	"duration": 1,
	"power": "Power1",
	"ease": "easeOut",
	"particles":
	[
	  {"x": -243, "y": 71, "r": 10, "c": 1, "a": 0.8},
	  {"x": -243, "y": 45, "r": 10, "c": 1, "a": 0.8},
	  {"x": -243, "y": 17, "r": 10, "c": 1, "a": 0.8},
	  {"x": -244, "y": -13, "r": 10, "c": 1, "a": 0.8},
	  {"x": -243, "y": -40, "r": 10, "c": 1, "a": 0.8},
	  {"x": -220, "y": -25, "r": 10, "c": 1, "a": 0.8},
	  {"x": -206, "y": -6, "r": 10, "c": 1, "a": 0.8},
	  {"x": -186, "y": 15, "r": 10, "c": 1, "a": 0.8},
	  {"x": -168, "y": 40, "r": 10, "c": 1, "a": 0.8},
	  {"x": -153, "y": 62, "r": 10, "c": 1, "a": 0.8},
	  {"x": -139, "y": 85, "r": 10, "c": 1, "a": 0.8},
	  {"x": -132, "y": 54, "r": 10, "c": 1, "a": 0.8},
	  {"x": -131, "y": 24, "r": 10, "c": 1, "a": 0.8},
	  {"x": -134, "y": 3, "r": 10, "c": 1, "a": 0.8},
	  {"x": -135, "y": -18, "r": 10, "c": 1, "a": 0.8},
	  {"x": -136, "y": -45, "r": 10, "c": 1, "a": 0.8},
	  {"x": -65, "y": -40, "r": 10, "c": 1, "a": 0.8},
	  {"x": -64, "y": -17, "r": 10, "c": 1, "a": 0.8},
	  {"x": -62, "y": 10, "r": 10, "c": 1, "a": 0.8},
	  {"x": -62, "y": 37, "r": 10, "c": 1, "a": 0.8},
	  {"x": -59, "y": 63, "r": 10, "c": 1, "a": 0.8},
	  {"x": -60, "y": 90, "r": 10, "c": 1, "a": 0.8},
	  {"x": -59, "y": 109, "r": 10, "c": 1, "a": 0.8},
	  {"x": -56, "y": 137, "r": 10, "c": 1, "a": 0.8},
	  {"x": -52, "y": 165, "r": 10, "c": 1, "a": 0.8},
	  {"x": -68, "y": 159, "r": 10, "c": 1, "a": 0.8},
	  {"x": -90, "y": 146, "r": 10, "c": 1, "a": 0.8},
	  {"x": -108, "y": 135, "r": 10, "c": 1, "a": 0.8},
	  {"x": -19, "y": 57, "r": 10, "c": 1, "a": 0.8},
	  {"x": 2, "y": 71, "r": 10, "c": 1, "a": 0.8},
	  {"x": 28, "y": 84, "r": 10, "c": 1, "a": 0.8},
	  {"x": 48, "y": 95, "r": 10, "c": 1, "a": 0.8},
	  {"x": 69, "y": 105, "r": 10, "c": 1, "a": 0.8},
	  {"x": 92, "y": 118, "r": 10, "c": 1, "a": 0.8},
	  {"x": 68, "y": 133, "r": 10, "c": 1, "a": 0.8},
	  {"x": 44, "y": 143, "r": 10, "c": 1, "a": 0.8},
	  {"x": 22, "y": 153, "r": 10, "c": 1, "a": 0.8},
	  {"x": -7, "y": 35, "r": 10, "c": 1, "a": 0.8},
	  {"x": 10, "y": 15, "r": 10, "c": 1, "a": 0.8},
	  {"x": 30, "y": -1, "r": 10, "c": 1, "a": 0.8},
	  {"x": 54, "y": -17, "r": 10, "c": 1, "a": 0.8},
	  {"x": 74, "y": -35, "r": 10, "c": 1, "a": 0.8}
	]
  },
  {
	  "name": "SevenBurstMono",
	  "creator": "DouG",
	  "duration": 1,
	  "power": "Circ",
	  "ease": "easeOut",
	  "particles":
	  [
	    {"x": 37, "y": 70, "r": 10, "c": 1, "a": 0.8},
	    {"x": 81, "y": 12, "r": 10, "c": 1, "a": 0.8},
	    {"x": 49, "y": -67, "r": 10, "c": 1, "a": 0.8},
	    {"x": -20, "y": -81, "r": 10, "c": 1, "a": 0.8},
	    {"x": -73, "y": -32, "r": 10, "c": 1, "a": 0.8},
	    {"x": -74, "y": 40, "r": 10, "c": 1, "a": 0.8},
	    {"x": -24, "y": 75, "r": 10, "c": 1, "a": 0.8},
	    {"x": -19, "y": 56, "r": 8, "c": 1, "a": 0.8},
	    {"x": 28, "y": 52, "r": 8, "c": 1, "a": 0.8},
	    {"x": 64, "y": 6, "r": 8, "c": 1, "a": 0.8},
	    {"x": 38, "y": -52, "r": 8, "c": 1, "a": 0.8},
	    {"x": -15, "y": -63, "r": 8, "c": 1, "a": 0.8},
	    {"x": -56, "y": -23, "r": 8, "c": 1, "a": 0.8},
	    {"x": -60, "y": 30, "r": 8, "c": 1, "a": 0.8},
	    {"x": -42, "y": -16, "r": 5, "c": 1, "a": 0.8},
	    {"x": -50, "y": 23, "r": 5, "c": 1, "a": 0.8},
	    {"x": -16, "y": 42, "r": 5, "c": 1, "a": 0.8},
	    {"x": 22, "y": 38, "r": 5, "c": 1, "a": 0.8},
	    {"x": 50, "y": 2, "r": 5, "c": 1, "a": 0.8},
	    {"x": 31, "y": -40, "r": 5, "c": 1, "a": 0.8},
	    {"x": -12, "y": -49, "r": 5, "c": 1, "a": 0.8},
	    {"x": -31, "y": -11, "r": 4, "c": 1, "a": 0.8},
	    {"x": -10, "y": -38, "r": 4, "c": 1, "a": 0.8},
	    {"x": 26, "y": -32, "r": 4, "c": 1, "a": 0.8},
	    {"x": 41, "y": 0, "r": 4, "c": 1, "a": 0.8},
	    {"x": 17, "y": 28, "r": 4, "c": 1, "a": 0.8},
	    {"x": -14, "y": 34, "r": 4, "c": 1, "a": 0.8},
	    {"x": -41, "y": 18, "r": 4, "c": 1, "a": 0.8},
	    {"x": -20, "y": -8, "r": 3, "c": 1, "a": 0.8},
	    {"x": -33, "y": 13, "r": 3, "c": 1, "a": 0.8},
	    {"x": -12, "y": 25, "r": 3, "c": 1, "a": 0.8},
	    {"x": 12, "y": 19, "r": 3, "c": 1, "a": 0.8},
	    {"x": 34, "y": -3, "r": 3, "c": 1, "a": 0.8},
	    {"x": 21, "y": -24, "r": 3, "c": 1, "a": 0.8},
	    {"x": -8, "y": -30, "r": 3, "c": 1, "a": 0.8}
	  ]
  },
  {
	"name": "21VOA43",
	"creator": "Neil Sparrow",
	"duration": 1,
	"power": "Power1",
	"ease": "easeOut",
	"particles":
	[
	  {"x": -491, "y": -112, "r": 10, "c": 1, "a": 0.8},
	  {"x": -491, "y": -85, "r": 10, "c": 1, "a": 0.8},
	  {"x": -490, "y": -57, "r": 10, "c": 1, "a": 0.8},
	  {"x": -488, "y": -31, "r": 10, "c": 1, "a": 0.8},
	  {"x": -490, "y": -3, "r": 10, "c": 1, "a": 0.8},
	  {"x": -490, "y": 28, "r": 10, "c": 1, "a": 0.8},
	  {"x": -488, "y": 57, "r": 10, "c": 1, "a": 0.8},
	  {"x": -488, "y": 85, "r": 10, "c": 1, "a": 0.8},
	  {"x": -685, "y": -60, "r": 10, "c": 1, "a": 0.8},
	  {"x": -668, "y": -80, "r": 10, "c": 1, "a": 0.8},
	  {"x": -650, "y": -100, "r": 10, "c": 1, "a": 0.8},
	  {"x": -625, "y": -109, "r": 10, "c": 1, "a": 0.8},
	  {"x": -603, "y": -108, "r": 10, "c": 1, "a": 0.8},
	  {"x": -584, "y": -96, "r": 10, "c": 1, "a": 0.8},
	  {"x": -570, "y": -75, "r": 10, "c": 1, "a": 0.8},
	  {"x": -556, "y": -48, "r": 10, "c": 1, "a": 0.8},
	  {"x": -564, "y": -24, "r": 10, "c": 1, "a": 0.8},
	  {"x": -580, "y": -11, "r": 10, "c": 1, "a": 0.8},
	  {"x": -601, "y": 0, "r": 10, "c": 1, "a": 0.8},
	  {"x": -620, "y": 15, "r": 10, "c": 1, "a": 0.8},
	  {"x": -640, "y": 30, "r": 10, "c": 1, "a": 0.8},
	  {"x": -660, "y": 52, "r": 10, "c": 1, "a": 0.8},
	  {"x": -670, "y": 80, "r": 10, "c": 1, "a": 0.8},
	  {"x": -689, "y": 99, "r": 10, "c": 1, "a": 0.8},
	  {"x": -664, "y": 103, "r": 10, "c": 1, "a": 0.8},
	  {"x": -645, "y": 99, "r": 10, "c": 1, "a": 0.8},
	  {"x": -622, "y": 100, "r": 10, "c": 1, "a": 0.8},
	  {"x": -598, "y": 101, "r": 10, "c": 1, "a": 0.8},
	  {"x": -576, "y": 103, "r": 10, "c": 1, "a": 0.8},
	  {"x": -550, "y": 100, "r": 10, "c": 1, "a": 0.8},
	  {"x": -523, "y": 105, "r": 10, "c": 1, "a": 0.8},
	  {"x": -301, "y": 89, "r": 10, "c": 1, "a": 0.8},
	  {"x": -293, "y": 71, "r": 10, "c": 1, "a": 0.8},
	  {"x": -288, "y": 51, "r": 10, "c": 1, "a": 0.8},
	  {"x": -280, "y": 32, "r": 10, "c": 1, "a": 0.8},
	  {"x": -272, "y": 6, "r": 10, "c": 1, "a": 0.8},
	  {"x": -260, "y": -16, "r": 10, "c": 1, "a": 0.8},
	  {"x": -227, "y": -74, "r": 10, "c": 1, "a": 0.8},
	  {"x": -218, "y": -88, "r": 10, "c": 1, "a": 0.8},
	  {"x": -205, "y": -105, "r": 10, "c": 1, "a": 0.8},
	  {"x": -314, "y": 95, "r": 10, "c": 1, "a": 0.8},
	  {"x": -332, "y": 76, "r": 10, "c": 1, "a": 0.8},
	  {"x": -348, "y": 56, "r": 10, "c": 1, "a": 0.8},
	  {"x": -360, "y": 35, "r": 10, "c": 1, "a": 0.8},
	  {"x": -377, "y": 7, "r": 10, "c": 1, "a": 0.8},
	  {"x": -394, "y": -8, "r": 10, "c": 1, "a": 0.8},
	  {"x": -406, "y": -28, "r": 10, "c": 1, "a": 0.8},
	  {"x": -421, "y": -51, "r": 10, "c": 1, "a": 0.8},
	  {"x": -437, "y": -66, "r": 10, "c": 1, "a": 0.8},
	  {"x": -450, "y": -86, "r": 10, "c": 1, "a": 0.8},
	  {"x": -249, "y": -40, "r": 10, "c": 1, "a": 0.8},
	  {"x": -121, "y": -87, "r": 10, "c": 1, "a": 0.8},
	  {"x": -136, "y": -76, "r": 10, "c": 1, "a": 0.8},
	  {"x": -152, "y": -62, "r": 10, "c": 1, "a": 0.8},
	  {"x": -163, "y": -43, "r": 10, "c": 1, "a": 0.8},
	  {"x": -166, "y": -20, "r": 10, "c": 1, "a": 0.8},
	  {"x": -170, "y": 7, "r": 10, "c": 1, "a": 0.8},
	  {"x": -168, "y": 37, "r": 10, "c": 1, "a": 0.8},
	  {"x": -156, "y": 58, "r": 10, "c": 1, "a": 0.8},
	  {"x": -144, "y": 75, "r": 10, "c": 1, "a": 0.8},
	  {"x": -128, "y": 85, "r": 10, "c": 1, "a": 0.8},
	  {"x": -106, "y": 87, "r": 10, "c": 1, "a": 0.8},
	  {"x": -88, "y": 83, "r": 10, "c": 1, "a": 0.8},
	  {"x": -67, "y": 69, "r": 10, "c": 1, "a": 0.8},
	  {"x": -59, "y": 45, "r": 10, "c": 1, "a": 0.8},
	  {"x": -59, "y": 22, "r": 10, "c": 1, "a": 0.8},
	  {"x": -55, "y": 0, "r": 10, "c": 1, "a": 0.8},
	  {"x": -54, "y": -31, "r": 10, "c": 1, "a": 0.8},
	  {"x": -57, "y": -51, "r": 10, "c": 1, "a": 0.8},
	  {"x": -66, "y": -70, "r": 10, "c": 1, "a": 0.8},
	  {"x": -79, "y": -77, "r": 10, "c": 1, "a": 0.8},
	  {"x": -98, "y": -89, "r": 10, "c": 1, "a": 0.8},
	  {"x": -26, "y": 93, "r": 10, "c": 1, "a": 0.8},
	  {"x": -24, "y": 72, "r": 10, "c": 1, "a": 0.8},
	  {"x": -20, "y": 59, "r": 10, "c": 1, "a": 0.8},
	  {"x": -16, "y": 41, "r": 10, "c": 1, "a": 0.8},
	  {"x": -12, "y": 22, "r": 10, "c": 1, "a": 0.8},
	  {"x": -8, "y": 3, "r": 10, "c": 1, "a": 0.8},
	  {"x": -1, "y": -16, "r": 10, "c": 1, "a": 0.8},
	  {"x": 12, "y": -49, "r": 10, "c": 1, "a": 0.8},
	  {"x": 19, "y": -84, "r": 10, "c": 1, "a": 0.8},
	  {"x": 32, "y": -99, "r": 10, "c": 1, "a": 0.8},
	  {"x": 8, "y": -30, "r": 10, "c": 1, "a": 0.8},
	  {"x": 54, "y": -100, "r": 10, "c": 1, "a": 0.8},
	  {"x": 59, "y": -82, "r": 10, "c": 1, "a": 0.8},
	  {"x": 64, "y": -68, "r": 10, "c": 1, "a": 0.8},
	  {"x": 75, "y": -48, "r": 10, "c": 1, "a": 0.8},
	  {"x": 80, "y": -23, "r": 10, "c": 1, "a": 0.8},
	  {"x": 84, "y": -5, "r": 10, "c": 1, "a": 0.8},
	  {"x": 92, "y": 16, "r": 10, "c": 1, "a": 0.8},
	  {"x": 100, "y": 33, "r": 10, "c": 1, "a": 0.8},
	  {"x": 107, "y": 47, "r": 10, "c": 1, "a": 0.8},
	  {"x": 109, "y": 72, "r": 10, "c": 1, "a": 0.8},
	  {"x": 112, "y": 80, "r": 10, "c": 1, "a": 0.8},
	  {"x": 117, "y": 103, "r": 10, "c": 1, "a": 0.8},
	  {"x": 5, "y": 18, "r": 10, "c": 1, "a": 0.8},
	  {"x": 26, "y": 18, "r": 10, "c": 1, "a": 0.8},
	  {"x": 46, "y": 18, "r": 10, "c": 1, "a": 0.8},
	  {"x": 61, "y": 18, "r": 10, "c": 1, "a": 0.8},
	  {"x": 80, "y": 16, "r": 10, "c": 1, "a": 0.8},
	  {"x": 268, "y": -102, "r": 10, "c": 1, "a": 0.8},
	  {"x": 269, "y": -77, "r": 10, "c": 1, "a": 0.8},
	  {"x": 272, "y": -54, "r": 10, "c": 1, "a": 0.8},
	  {"x": 272, "y": -35, "r": 10, "c": 1, "a": 0.8},
	  {"x": 276, "y": -13, "r": 10, "c": 1, "a": 0.8},
	  {"x": 275, "y": 4, "r": 10, "c": 1, "a": 0.8},
	  {"x": 276, "y": 25, "r": 10, "c": 1, "a": 0.8},
	  {"x": 276, "y": 40, "r": 10, "c": 1, "a": 0.8},
	  {"x": 276, "y": 50, "r": 10, "c": 1, "a": 0.8},
	  {"x": 279, "y": 70, "r": 10, "c": 1, "a": 0.8},
	  {"x": 276, "y": 97, "r": 10, "c": 1, "a": 0.8},
	  {"x": 257, "y": -102, "r": 10, "c": 1, "a": 0.8},
	  {"x": 241, "y": -87, "r": 10, "c": 1, "a": 0.8},
	  {"x": 231, "y": -76, "r": 10, "c": 1, "a": 0.8},
	  {"x": 219, "y": -61, "r": 10, "c": 1, "a": 0.8},
	  {"x": 207, "y": -43, "r": 10, "c": 1, "a": 0.8},
	  {"x": 197, "y": -22, "r": 10, "c": 1, "a": 0.8},
	  {"x": 186, "y": -4, "r": 10, "c": 1, "a": 0.8},
	  {"x": 176, "y": 13, "r": 10, "c": 1, "a": 0.8},
	  {"x": 168, "y": 30, "r": 10, "c": 1, "a": 0.8},
	  {"x": 195, "y": 29, "r": 10, "c": 1, "a": 0.8},
	  {"x": 216, "y": 32, "r": 10, "c": 1, "a": 0.8},
	  {"x": 232, "y": 31, "r": 10, "c": 1, "a": 0.8},
	  {"x": 253, "y": 26, "r": 10, "c": 1, "a": 0.8},
	  {"x": 274, "y": 27, "r": 10, "c": 1, "a": 0.8},
	  {"x": 295, "y": 23, "r": 10, "c": 1, "a": 0.8},
	  {"x": 316, "y": 23, "r": 10, "c": 1, "a": 0.8},
	  {"x": 328, "y": 20, "r": 10, "c": 1, "a": 0.8},
	  {"x": 368, "y": -103, "r": 10, "c": 1, "a": 0.8},
	  {"x": 389, "y": -100, "r": 10, "c": 1, "a": 0.8},
	  {"x": 401, "y": -92, "r": 10, "c": 1, "a": 0.8},
	  {"x": 412, "y": -80, "r": 10, "c": 1, "a": 0.8},
	  {"x": 418, "y": -65, "r": 10, "c": 1, "a": 0.8},
	  {"x": 420, "y": -51, "r": 10, "c": 1, "a": 0.8},
	  {"x": 417, "y": -32, "r": 10, "c": 1, "a": 0.8},
	  {"x": 408, "y": -19, "r": 10, "c": 1, "a": 0.8},
	  {"x": 396, "y": -12, "r": 10, "c": 1, "a": 0.8},
	  {"x": 373, "y": -6, "r": 10, "c": 1, "a": 0.8},
	  {"x": 363, "y": -7, "r": 10, "c": 1, "a": 0.8},
	  {"x": 394, "y": 8, "r": 10, "c": 1, "a": 0.8},
	  {"x": 414, "y": 19, "r": 10, "c": 1, "a": 0.8},
	  {"x": 431, "y": 28, "r": 10, "c": 1, "a": 0.8},
	  {"x": 440, "y": 46, "r": 10, "c": 1, "a": 0.8},
	  {"x": 437, "y": 63, "r": 10, "c": 1, "a": 0.8},
	  {"x": 423, "y": 84, "r": 10, "c": 1, "a": 0.8},
	  {"x": 411, "y": 95, "r": 10, "c": 1, "a": 0.8},
	  {"x": 390, "y": 98, "r": 10, "c": 1, "a": 0.8},
	  {"x": 375, "y": 100, "r": 10, "c": 1, "a": 0.8},
	  {"x": 357, "y": 100, "r": 10, "c": 1, "a": 0.8},
	  {"x": 345, "y": 100, "r": 10, "c": 1, "a": 0.8},
	  {"x": 344, "y": -104, "r": 10, "c": 1, "a": 0.8}
	]
  },
  {
	  "name": "Happy",
	  "creator": "DouG",
	  "duration": 1,
	  "power": "Power1",
	  "ease": "easeOut",
	  "particles":
	  [
	    {"x": -10, "y": -30, "r": 4, "c": 1, "a": 0.8},
	    {"x": -10, "y": -20, "r": 4, "c": 1, "a": 0.8},
	    {"x": -10, "y": -10, "r": 4, "c": 1, "a": 0.8},
	    {"x": -10, "y": 0, "r": 4, "c": 1, "a": 0.8},
	    {"x": -10, "y": 10, "r": 4, "c": 1, "a": 0.8},
	    {"x": -10, "y": 20, "r": 4, "c": 1, "a": 0.8},
	    {"x": -10, "y": 30, "r": 4, "c": 1, "a": 0.8},
	    {"x": 0, "y": -30, "r": 4, "c": 1, "a": 0.8},
	    {"x": 10, "y": -30, "r": 4, "c": 1, "a": 0.8},
	    {"x": 20, "y": -30, "r": 4, "c": 1, "a": 0.8},
	    {"x": 20, "y": -20, "r": 4, "c": 1, "a": 0.8},
	    {"x": 20, "y": -10, "r": 4, "c": 1, "a": 0.8},
	    {"x": 20, "y": 0, "r": 4, "c": 1, "a": 0.8},
	    {"x": 10, "y": 0, "r": 4, "c": 1, "a": 0.8},
	    {"x": 0, "y": 0, "r": 4, "c": 1, "a": 0.8},
	    {"x": 40, "y": -30, "r": 4, "c": 1, "a": 0.8},
	    {"x": 40, "y": -20, "r": 4, "c": 1, "a": 0.8},
	    {"x": 40, "y": -10, "r": 4, "c": 1, "a": 0.8},
	    {"x": 40, "y": 0, "r": 4, "c": 1, "a": 0.8},
	    {"x": 40, "y": 10, "r": 4, "c": 1, "a": 0.8},
	    {"x": 40, "y": 20, "r": 4, "c": 1, "a": 0.8},
	    {"x": 40, "y": 30, "r": 4, "c": 1, "a": 0.8},
	    {"x": 50, "y": -30, "r": 4, "c": 1, "a": 0.8},
	    {"x": 60, "y": -30, "r": 4, "c": 1, "a": 0.8},
	    {"x": 70, "y": -30, "r": 4, "c": 1, "a": 0.8},
	    {"x": 70, "y": -20, "r": 4, "c": 1, "a": 0.8},
	    {"x": 70, "y": -10, "r": 4, "c": 1, "a": 0.8},
	    {"x": 70, "y": 0, "r": 4, "c": 1, "a": 0.8},
	    {"x": 60, "y": 0, "r": 4, "c": 1, "a": 0.8},
	    {"x": 50, "y": 0, "r": 4, "c": 1, "a": 0.8},
	    {"x": 90, "y": -30, "r": 4, "c": 1, "a": 0.8},
	    {"x": 90, "y": -20, "r": 4, "c": 1, "a": 0.8},
	    {"x": 90, "y": -10, "r": 4, "c": 1, "a": 0.8},
	    {"x": 90, "y": 0, "r": 4, "c": 1, "a": 0.8},
	    {"x": 120, "y": -30, "r": 4, "c": 1, "a": 0.8},
	    {"x": 120, "y": -20, "r": 4, "c": 1, "a": 0.8},
	    {"x": 120, "y": -10, "r": 4, "c": 1, "a": 0.8},
	    {"x": 100, "y": 0, "r": 4, "c": 1, "a": 0.8},
	    {"x": 110, "y": 0, "r": 4, "c": 1, "a": 0.8},
	    {"x": 120, "y": 0, "r": 4, "c": 1, "a": 0.8},
	    {"x": 120, "y": 10, "r": 4, "c": 1, "a": 0.8},
	    {"x": 120, "y": 20, "r": 4, "c": 1, "a": 0.8},
	    {"x": 120, "y": 30, "r": 4, "c": 1, "a": 0.8},
	    {"x": -30, "y": 30, "r": 4, "c": 1, "a": 0.8},
	    {"x": -30, "y": 20, "r": 4, "c": 1, "a": 0.8},
	    {"x": -30, "y": 10, "r": 4, "c": 1, "a": 0.8},
	    {"x": -30, "y": 0, "r": 4, "c": 1, "a": 0.8},
	    {"x": -30, "y": -10, "r": 4, "c": 1, "a": 0.8},
	    {"x": -30, "y": -20, "r": 4, "c": 1, "a": 0.8},
	    {"x": -30, "y": -30, "r": 4, "c": 1, "a": 0.8},
	    {"x": -40, "y": -30, "r": 4, "c": 1, "a": 0.8},
	    {"x": -50, "y": -30, "r": 4, "c": 1, "a": 0.8},
	    {"x": -60, "y": -30, "r": 4, "c": 1, "a": 0.8},
	    {"x": -60, "y": -20, "r": 4, "c": 1, "a": 0.8},
	    {"x": -60, "y": -10, "r": 4, "c": 1, "a": 0.8},
	    {"x": -60, "y": 0, "r": 4, "c": 1, "a": 0.8},
	    {"x": -60, "y": 10, "r": 4, "c": 1, "a": 0.8},
	    {"x": -60, "y": 20, "r": 4, "c": 1, "a": 0.8},
	    {"x": -60, "y": 30, "r": 4, "c": 1, "a": 0.8},
	    {"x": -50, "y": 0, "r": 4, "c": 1, "a": 0.8},
	    {"x": -40, "y": 0, "r": 4, "c": 1, "a": 0.8},
	    {"x": -80, "y": -30, "r": 4, "c": 1, "a": 0.8},
	    {"x": -80, "y": -20, "r": 4, "c": 1, "a": 0.8},
	    {"x": -80, "y": 0, "r": 4, "c": 1, "a": 0.8},
	    {"x": -80, "y": -10, "r": 4, "c": 1, "a": 0.8},
	    {"x": -80, "y": 10, "r": 4, "c": 1, "a": 0.8},
	    {"x": -80, "y": 20, "r": 4, "c": 1, "a": 0.8},
	    {"x": -80, "y": 30, "r": 4, "c": 1, "a": 0.8},
	    {"x": -90, "y": 0, "r": 4, "c": 1, "a": 0.8},
	    {"x": -100, "y": 0, "r": 4, "c": 1, "a": 0.8},
	    {"x": -110, "y": 0, "r": 4, "c": 1, "a": 0.8},
	    {"x": -110, "y": -10, "r": 4, "c": 1, "a": 0.8},
	    {"x": -110, "y": -20, "r": 4, "c": 1, "a": 0.8},
	    {"x": -110, "y": -30, "r": 4, "c": 1, "a": 0.8},
	    {"x": -110, "y": 10, "r": 4, "c": 1, "a": 0.8},
	    {"x": -110, "y": 20, "r": 4, "c": 1, "a": 0.8},
	    {"x": -110, "y": 30, "r": 4, "c": 1, "a": 0.8}
	  ]
  },
  {
	  "name": "TriTipStarBurst",
	  "creator": "DouG",
	  "duration": 1,
	  "power": "Power1",
	  "ease": "easeOut",
	  "particles":
	  [
	    {"x": -13, "y": 14, "r": 5, "c": 1, "a": 0.5},
	    {"x": -26, "y": 30, "r": 5, "c": 1, "a": 0.5},
	    {"x": -38, "y": 46, "r": 5, "c": 1, "a": 0.5},
	    {"x": -53, "y": 65, "r": 5, "c": 1, "a": 0.5},
	    {"x": -62, "y": 79, "r": 5, "c": 1, "a": 0.5},
	    {"x": 15, "y": 10, "r": 5, "c": 1, "a": 0.5},
	    {"x": 30, "y": 26, "r": 5, "c": 1, "a": 0.5},
	    {"x": 44, "y": 45, "r": 5, "c": 1, "a": 0.5},
	    {"x": 57, "y": 60, "r": 5, "c": 1, "a": 0.5},
	    {"x": 14, "y": -12, "r": 5, "c": 1, "a": 0.5},
	    {"x": 39, "y": -25, "r": 5, "c": 1, "a": 0.5},
	    {"x": 58, "y": -34, "r": 5, "c": 1, "a": 0.5},
	    {"x": 75, "y": -40, "r": 5, "c": 1, "a": 0.5},
	    {"x": -1, "y": -94, "r": 5, "c": 1, "a": 0.5},
	    {"x": 2, "y": -73, "r": 5, "c": 1, "a": 0.5},
	    {"x": 3, "y": -53, "r": 5, "c": 1, "a": 0.5},
	    {"x": 3, "y": -30, "r": 5, "c": 1, "a": 0.5},
	    {"x": 3, "y": -15, "r": 5, "c": 1, "a": 0.5},
	    {"x": -13, "y": -5, "r": 5, "c": 1, "a": 0.5},
	    {"x": -31, "y": -12, "r": 5, "c": 1, "a": 0.5},
	    {"x": -44, "y": -20, "r": 5, "c": 1, "a": 0.5},
	    {"x": -60, "y": -24, "r": 5, "c": 1, "a": 0.5},
	    {"x": -80, "y": -36, "r": 5, "c": 1, "a": 0.5},
	    {"x": -15, "y": -102, "r": 10, "c": 1, "a": 0.8},
	    {"x": -98, "y": -31, "r": 10, "c": 1, "a": 0.8},
	    {"x": -53, "y": 89, "r": 10, "c": 1, "a": 0.8},
	    {"x": 61, "y": 83, "r": 10, "c": 1, "a": 0.8},
	    {"x": 94, "y": -41, "r": 10, "c": 1, "a": 0.8},
	    {"x": -88, "y": -54, "r": 10, "c": 3, "a": 0.8},
	    {"x": 12, "y": -102, "r": 10, "c": 3, "a": 0.8},
	    {"x": 84, "y": -60, "r": 10, "c": 3, "a": 0.8},
	    {"x": 76, "y": 69, "r": 10, "c": 3, "a": 0.8},
	    {"x": -74, "y": 72, "r": 10, "c": 3, "a": 0.8},
	    {"x": -110, "y": -53, "r": 10, "c": 2, "a": 0.8},
	    {"x": -2, "y": -122, "r": 10, "c": 2, "a": 0.8},
	    {"x": 108, "y": -57, "r": 10, "c": 2, "a": 0.8},
	    {"x": 82, "y": 90, "r": 10, "c": 2, "a": 0.8},
	    {"x": -75, "y": 96, "r": 10, "c": 2, "a": 0.8}
	  ]
  },
  {
	  "name": "AsteriskMono",
	  "creator": "DouG",
	  "duration": 0.5,
	  "power": "Power4",
	  "ease": "easeOut",
	  "particles":
	  [
	    {"x": 0, "y": 0, "r": 5, "c": 1, "a": 1},
	    {"x": 0, "y": 23, "r": 5, "c": 1, "a": 1},
	    {"x": 0, "y": 46, "r": 5, "c": 1, "a": 1},
	    {"x": 0, "y": 69, "r": 5, "c": 1, "a": 1},
	    {"x": 0, "y": 92, "r": 5, "c": 1, "a": 1},
	    {"x": 23, "y": 0, "r": 5, "c": 1, "a": 1},
	    {"x": 46, "y": 0, "r": 5, "c": 1, "a": 1},
	    {"x": 69, "y": 0, "r": 5, "c": 1, "a": 1},
	    {"x": 92, "y": 0, "r": 5, "c": 1, "a": 1},
	    {"x": 115, "y": 0, "r": 5, "c": 1, "a": 1},
	    {"x": 0, "y": 115, "r": 5, "c": 1, "a": 1},
	    {"x": -23, "y": 0, "r": 5, "c": 1, "a": 1},
	    {"x": -46, "y": 0, "r": 5, "c": 1, "a": 1},
	    {"x": -69, "y": 0, "r": 5, "c": 1, "a": 1},
	    {"x": -92, "y": 0, "r": 5, "c": 1, "a": 1},
	    {"x": -115, "y": 0, "r": 5, "c": 1, "a": 1},
	    {"x": 0, "y": -23, "r": 5, "c": 1, "a": 1},
	    {"x": 0, "y": -46, "r": 5, "c": 1, "a": 1},
	    {"x": 0, "y": -69, "r": 5, "c": 1, "a": 1},
	    {"x": 0, "y": -92, "r": 5, "c": 1, "a": 1},
	    {"x": 0, "y": -115, "r": 5, "c": 1, "a": 1},
	    {"x": -23, "y": -23, "r": 5, "c": 1, "a": 1},
	    {"x": -46, "y": -46, "r": 5, "c": 1, "a": 1},
	    {"x": -69, "y": -69, "r": 5, "c": 1, "a": 1},
	    {"x": -92, "y": -92, "r": 5, "c": 1, "a": 1},
	    {"x": 23, "y": -23, "r": 5, "c": 1, "a": 1},
	    {"x": 46, "y": -46, "r": 5, "c": 1, "a": 1},
	    {"x": 69, "y": -69, "r": 5, "c": 1, "a": 1},
	    {"x": 92, "y": -92, "r": 5, "c": 1, "a": 1},
	    {"x": 23, "y": 23, "r": 5, "c": 1, "a": 1},
	    {"x": 46, "y": 46, "r": 5, "c": 1, "a": 1},
	    {"x": 69, "y": 69, "r": 5, "c": 1, "a": 1},
	    {"x": 92, "y": 92, "r": 5, "c": 1, "a": 1},
	    {"x": -23, "y": 23, "r": 5, "c": 1, "a": 1},
	    {"x": -46, "y": 46, "r": 5, "c": 1, "a": 1},
	    {"x": -69, "y": 69, "r": 5, "c": 1, "a": 1},
	    {"x": -92, "y": 92, "r": 5, "c": 1, "a": 1}
	  ]
	},
	{
	  "name": "AsteriskMulti",
	  "creator": "DouG",
	  "duration": 1,
	  "power": "Power4",
	  "ease": "easeOut",
	  "particles":
	  [
	    {"x": 0, "y": 0, "r": 5, "c": 1, "a": 1},
	    {"x": 0, "y": 23, "r": 5, "c": 1, "a": 1},
	    {"x": 0, "y": 46, "r": 5, "c": 1, "a": 1},
	    {"x": 0, "y": 69, "r": 5, "c": 1, "a": 1},
	    {"x": 0, "y": 92, "r": 5, "c": 1, "a": 1},
	    {"x": 23, "y": 0, "r": 5, "c": 1, "a": 1},
	    {"x": 46, "y": 0, "r": 5, "c": 1, "a": 1},
	    {"x": 69, "y": 0, "r": 5, "c": 1, "a": 1},
	    {"x": 92, "y": 0, "r": 5, "c": 1, "a": 1},
	    {"x": 115, "y": 0, "r": 10, "c": 1, "a": 1},
	    {"x": 0, "y": 115, "r": 10, "c": 1, "a": 1},
	    {"x": -23, "y": 0, "r": 5, "c": 1, "a": 1},
	    {"x": -46, "y": 0, "r": 5, "c": 1, "a": 1},
	    {"x": -69, "y": 0, "r": 5, "c": 1, "a": 1},
	    {"x": -92, "y": 0, "r": 5, "c": 1, "a": 1},
	    {"x": -115, "y": 0, "r": 10, "c": 1, "a": 1},
	    {"x": 0, "y": -23, "r": 5, "c": 1, "a": 1},
	    {"x": 0, "y": -46, "r": 5, "c": 1, "a": 1},
	    {"x": 0, "y": -69, "r": 5, "c": 1, "a": 1},
	    {"x": 0, "y": -92, "r": 5, "c": 1, "a": 1},
	    {"x": 0, "y": -115, "r": 10, "c": 1, "a": 1},
	    {"x": -23, "y": -23, "r": 5, "c": 2, "a": 1},
	    {"x": -46, "y": -46, "r": 5, "c": 2, "a": 1},
	    {"x": -69, "y": -69, "r": 5, "c": 2, "a": 1},
	    {"x": -92, "y": -92, "r": 10, "c": 2, "a": 1},
	    {"x": 23, "y": -23, "r": 5, "c": 3, "a": 1},
	    {"x": 45, "y": -48, "r": 5, "c": 3, "a": 1},
	    {"x": 69, "y": -69, "r": 5, "c": 3, "a": 1},
	    {"x": 92, "y": -92, "r": 10, "c": 3, "a": 1},
	    {"x": 23, "y": 23, "r": 5, "c": 3, "a": 1},
	    {"x": 46, "y": 46, "r": 5, "c": 3, "a": 1},
	    {"x": 69, "y": 69, "r": 5, "c": 3, "a": 1},
	    {"x": 92, "y": 92, "r": 10, "c": 3, "a": 1},
	    {"x": -23, "y": 23, "r": 5, "c": 2, "a": 1},
	    {"x": -46, "y": 46, "r": 5, "c": 2, "a": 1},
	    {"x": -69, "y": 69, "r": 5, "c": 2, "a": 1},
	    {"x": -92, "y": 92, "r": 10, "c": 2, "a": 1}
	  ]
  },
  {
	  "name": "3DCircleMono",
	  "creator": "DouG",
	  "duration": 1,
	  "power": "Circ",
	  "ease": "easeOut",
	  "particles":
	  [
	    {"x": 29, "y": -75, "r": 10, "c": 1, "a": 0.8},
	    {"x": 69, "y": 41, "r": 10, "c": 1, "a": 0.8},
	    {"x": -30, "y": 90, "r": 10, "c": 1, "a": 0.8},
	    {"x": -80, "y": -7, "r": 10, "c": 1, "a": 0.8},
	    {"x": -65, "y": 46, "r": 8, "c": 1, "a": 0.8},
	    {"x": -50, "y": -62, "r": 8, "c": 1, "a": 0.8},
	    {"x": 69, "y": -40, "r": 8, "c": 1, "a": 0.8},
	    {"x": 33, "y": 73, "r": 8, "c": 1, "a": 0.8},
	    {"x": -44, "y": 67, "r": 5, "c": 1, "a": 0.8},
	    {"x": -77, "y": 20, "r": 5, "c": 1, "a": 0.8},
	    {"x": -71, "y": -38, "r": 5, "c": 1, "a": 0.8},
	    {"x": -18, "y": -78, "r": 5, "c": 1, "a": 0.8},
	    {"x": 54, "y": -59, "r": 5, "c": 1, "a": 0.8},
	    {"x": 80, "y": 8, "r": 5, "c": 1, "a": 0.8},
	    {"x": 53, "y": 60, "r": 5, "c": 1, "a": 0.8},
	    {"x": 1, "y": 80, "r": 5, "c": 1, "a": 0.8},
	    {"x": -50, "y": 39, "r": 5, "c": 1, "a": 0.8},
	    {"x": 33, "y": 54, "r": 5, "c": 1, "a": 0.8},
	    {"x": 62, "y": 9, "r": 5, "c": 1, "a": 0.8},
	    {"x": 44, "y": -45, "r": 5, "c": 1, "a": 0.8},
	    {"x": -1, "y": -63, "r": 5, "c": 1, "a": 0.8},
	    {"x": -55, "y": -31, "r": 5, "c": 1, "a": 0.8},
	    {"x": -62, "y": 13, "r": 10, "c": 1, "a": 0.8},
	    {"x": -24, "y": -58, "r": 10, "c": 1, "a": 0.8},
	    {"x": 61, "y": -16, "r": 10, "c": 1, "a": 0.8},
	    {"x": -18, "y": 60, "r": 10, "c": 1, "a": 0.8},
	    {"x": 18, "y": 60, "r": 10, "c": 1, "a": 0.8},
	    {"x": 49, "y": 40, "r": 10, "c": 1, "a": 0.8},
	    {"x": 30, "y": 30, "r": 10, "c": 1, "a": 0.8},
	    {"x": 30, "y": -30, "r": 10, "c": 1, "a": 0.8},
	    {"x": 1, "y": -39, "r": 10, "c": 1, "a": 0.8},
	    {"x": -41, "y": -9, "r": 10, "c": 1, "a": 0.8},
	    {"x": -24, "y": 34, "r": 10, "c": 1, "a": 0.8},
	    {"x": -38, "y": 19, "r": 8, "c": 1, "a": 0.8},
	    {"x": 7, "y": 41, "r": 8, "c": 1, "a": 0.8},
	    {"x": 42, "y": 4, "r": 8, "c": 1, "a": 0.8},
	    {"x": -27, "y": -33, "r": 5, "c": 1, "a": 0.8},
	    {"x": -5, "y": 17, "r": 5, "c": 1, "a": 0.8},
	    {"x": 16, "y": 8, "r": 5, "c": 1, "a": 0.8},
	    {"x": -14, "y": -12, "r": 8, "c": 1, "a": 0.8},
	    {"x": 14, "y": -20, "r": 8, "c": 1, "a": 0.8},
	    {"x": 0, "y": 0, "r": 10, "c": 1, "a": 0.8}
	  ]
  },
  {
	  "name": "Packed",
	  "creator": "DouG",
	  "duration": 2,
	  "power": "Power4",
	  "ease": "easeOut",
	  "particles":
	  [
	    {"x": -50, "y": 92, "r": 14, "c": 3, "a": 0.8},
	    {"x": 67, "y": 76, "r": 14, "c": 3, "a": 0.8},
	    {"x": 81, "y": -62, "r": 14, "c": 3, "a": 0.8},
	    {"x": -40, "y": -94, "r": 14, "c": 3, "a": 0.8},
	    {"x": -102, "y": -8, "r": 14, "c": 3, "a": 0.8},
	    {"x": 107, "y": 14, "r": 14, "c": 3, "a": 0.8},
	    {"x": -86, "y": 54, "r": 9, "c": 1, "a": 0.8},
	    {"x": -77, "y": -68, "r": 9, "c": 1, "a": 0.8},
	    {"x": 24, "y": -96, "r": 9, "c": 1, "a": 0.8},
	    {"x": 90, "y": -14, "r": 9, "c": 1, "a": 0.8},
	    {"x": 87, "y": 40, "r": 9, "c": 1, "a": 0.8},
	    {"x": 27, "y": 91, "r": 9, "c": 1, "a": 0.8},
	    {"x": -3, "y": 102, "r": 9, "c": 1, "a": 0.8},
	    {"x": -67, "y": 77, "r": 4, "c": 2, "a": 0.8},
	    {"x": -21, "y": 100, "r": 4, "c": 2, "a": 0.8},
	    {"x": 44, "y": 92, "r": 4, "c": 2, "a": 0.8},
	    {"x": 81, "y": 62, "r": 4, "c": 2, "a": 0.8},
	    {"x": 95, "y": -36, "r": 4, "c": 2, "a": 0.8},
	    {"x": 75, "y": -89, "r": 4, "c": 2, "a": 0.8},
	    {"x": 51, "y": -88, "r": 4, "c": 2, "a": 0.8},
	    {"x": -3, "y": -102, "r": 4, "c": 2, "a": 0.8},
	    {"x": -62, "y": -81, "r": 4, "c": 2, "a": 0.8},
	    {"x": -99, "y": 33, "r": 4, "c": 2, "a": 0.8},
	    {"x": -87, "y": -45, "r": 4, "c": 2, "a": 0.8},
	    {"x": -97, "y": -32, "r": 4, "c": 2, "a": 0.8},
	    {"x": 4, "y": 75, "r": 4, "c": 2, "a": 0.8},
	    {"x": 41, "y": 69, "r": 4, "c": 2, "a": 0.8},
	    {"x": 76, "y": -29, "r": 4, "c": 2, "a": 0.8},
	    {"x": 39, "y": -64, "r": 4, "c": 2, "a": 0.8},
	    {"x": -24, "y": -71, "r": 4, "c": 2, "a": 0.8},
	    {"x": -73, "y": -17, "r": 4, "c": 2, "a": 0.8},
	    {"x": -64, "y": 39, "r": 4, "c": 2, "a": 0.8},
	    {"x": -16, "y": 73, "r": 9, "c": 1, "a": 0.8},
	    {"x": 55, "y": 44, "r": 9, "c": 1, "a": 0.8},
	    {"x": 62, "y": -42, "r": 9, "c": 1, "a": 0.8},
	    {"x": -39, "y": -64, "r": 9, "c": 1, "a": 0.8},
	    {"x": -74, "y": 11, "r": 9, "c": 1, "a": 0.8},
	    {"x": -45, "y": 57, "r": 14, "c": 3, "a": 0.8},
	    {"x": 70, "y": 11, "r": 14, "c": 3, "a": 0.8},
	    {"x": 16, "y": -73, "r": 14, "c": 3, "a": 0.8},
	    {"x": -65, "y": -37, "r": 14, "c": 3, "a": 0.8},
	    {"x": 18, "y": 51, "r": 14, "c": 3, "a": 0.8},
	    {"x": -39, "y": 5, "r": 14, "c": 3, "a": 0.8},
	    {"x": -16, "y": -43, "r": 14, "c": 3, "a": 0.8},
	    {"x": 40, "y": -23, "r": 14, "c": 3, "a": 0.8},
	    {"x": -30, "y": 35, "r": 9, "c": 1, "a": 0.8},
	    {"x": -37, "y": -21, "r": 9, "c": 1, "a": 0.8},
	    {"x": 18, "y": -36, "r": 9, "c": 1, "a": 0.8},
	    {"x": 43, "y": 16, "r": 9, "c": 1, "a": 0.8},
	    {"x": -9, "y": 45, "r": 4, "c": 2, "a": 0.8},
	    {"x": 35, "y": 30, "r": 4, "c": 2, "a": 0.8},
	    {"x": 7, "y": -45, "r": 4, "c": 2, "a": 0.8},
	    {"x": 46, "y": -1, "r": 4, "c": 2, "a": 0.8},
	    {"x": -49, "y": 24, "r": 4, "c": 2, "a": 0.8},
	    {"x": -13, "y": 3, "r": 9, "c": 1, "a": 0.8},
	    {"x": 24, "y": -3, "r": 9, "c": 1, "a": 0.8},
	    {"x": 10, "y": 19, "r": 14, "c": 3, "a": 0.8},
	    {"x": 2, "y": -16, "r": 14, "c": 3, "a": 0.8},
	    {"x": -21, "y": -16, "r": 4, "c": 2, "a": 0.8},
	    {"x": -13, "y": 26, "r": 4, "c": 2, "a": 0.8},
	    {"x": 63, "y": -13, "r": 4, "c": 2, "a": 0.8},
	    {"x": 36, "y": -46, "r": 4, "c": 2, "a": 0.8},
	    {"x": -11, "y": -76, "r": 4, "c": 2, "a": 0.8},
	    {"x": 71, "y": 41, "r": 4, "c": 2, "a": 0.8},
	    {"x": -55, "y": -13, "r": 4, "c": 2, "a": 0.8},
	    {"x": -57, "y": -62, "r": 4, "c": 2, "a": 0.8},
	    {"x": -35, "y": -41, "r": 4, "c": 2, "a": 0.8},
	    {"x": 40, "y": 51, "r": 4, "c": 2, "a": 0.8},
	    {"x": -78, "y": 31, "r": 4, "c": 2, "a": 0.8},
	    {"x": -95, "y": 13, "r": 4, "c": 2, "a": 0.8},
	    {"x": -65, "y": -2, "r": 4, "c": 2, "a": 0.8},
	    {"x": -23, "y": 55, "r": 4, "c": 2, "a": 0.8},
	    {"x": -32, "y": 82, "r": 4, "c": 2, "a": 0.8},
	    {"x": 22, "y": 74, "r": 4, "c": 2, "a": 0.8},
	    {"x": 9, "y": 93, "r": 4, "c": 2, "a": 0.8},
	    {"x": 108, "y": -12, "r": 4, "c": 2, "a": 0.8},
	    {"x": 56, "y": -66, "r": 4, "c": 2, "a": 0.8},
	    {"x": -14, "y": -90, "r": 4, "c": 2, "a": 0.8},
	    {"x": -2, "y": -90, "r": 4, "c": 2, "a": 0.8},
	    {"x": 38, "y": -80, "r": 4, "c": 2, "a": 0.8},
	    {"x": -3, "y": -61, "r": 4, "c": 2, "a": 0.8},
	    {"x": -87, "y": -23, "r": 4, "c": 2, "a": 0.8},
	    {"x": -67, "y": 59, "r": 4, "c": 2, "a": 0.8},
	    {"x": -5, "y": 59, "r": 4, "c": 2, "a": 0.8},
	    {"x": 87, "y": 24, "r": 4, "c": 2, "a": 0.8},
	    {"x": 87, "y": 1, "r": 4, "c": 2, "a": 0.8}
	  ]
  },
  {
	  "name": "Sideways",
	  "creator": "DouG",
	  "duration": 1,
	  "power": "Power4",
	  "ease": "easeOut",
	  "particles":
	  [
	    {"x": 243, "y": 1, "r": 17, "c": 1, "a": 0.8},
	    {"x": -213, "y": 3, "r": 17, "c": 1, "a": 0.8},
	    {"x": -167, "y": 4, "r": 14, "c": 2, "a": 0.8},
	    {"x": 194, "y": 0, "r": 14, "c": 2, "a": 0.8},
	    {"x": -123, "y": 3, "r": 11, "c": 3, "a": 0.8},
	    {"x": 148, "y": 0, "r": 11, "c": 3, "a": 0.8},
	    {"x": -89, "y": 2, "r": 8, "c": 1, "a": 0.8},
	    {"x": 114, "y": 0, "r": 8, "c": 1, "a": 0.8},
	    {"x": -60, "y": 1, "r": 6, "c": 2, "a": 0.8},
	    {"x": 83, "y": 0, "r": 6, "c": 2, "a": 0.8},
	    {"x": -38, "y": 1, "r": 4, "c": 3, "a": 0.8},
	    {"x": 61, "y": 0, "r": 4, "c": 3, "a": 0.8},
	    {"x": 38, "y": 1, "r": 4, "c": 3, "a": 0.8}
	  ]
	}
];