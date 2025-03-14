import { asyncHandler } from "../utils/asyncHandler.js";
import {
  createHotelService,
  listHotelsService,
  searchHotelsService,
} from "../services/hotelServices.js";

export const CreateHotel = asyncHandler(async (req, res) => {
  const hotel = await createHotelService(req.body.name, req.body.price);

  res.status(201).json({
    RespCode: 200,
    RespMessage: "success",
    Result: hotel,
  });
});

export const ListHotel = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const hotels = await listHotelsService(id);

  res.status(200).json({
    RespCode: 200,
    RespMessage: "success",
    Result: hotels,
  });
});

export const SearchHotel = asyncHandler(async (req, res) => {
  const { date } = req.body;
  const hotels = await searchHotelsService(date);

  res.status(200).json({
    RespCode: 200,
    RespMessage: "success",
    Result: hotels,
  });
});

export const DashboardHotel = asyncHandler(async (req, res) => {
  const hotels = await listHotelsService("");

  if (!hotels.length) {
    return res.status(200).json({
      RespCode: 200,
      RespMessage: "success",
      Result: {
        Data: [],
        Dashboard: {
          AllHotel: 0,
          Price: {
            High: null,
            Low: null,
          },
          LastHotelAdd: null,
        },
      },
    });
  }

  const totalHotels = hotels.length;

  const highestPriceHotel = hotels.reduce(
    (max, hotel) => (hotel.price > max.price ? hotel : max),
    hotels[0]
  );

  const lowestPriceHotel = hotels.reduce(
    (min, hotel) => (hotel.price < min.price ? hotel : min),
    hotels[0]
  );

  const lastHotelAdded = hotels.reduce(
    (latest, hotel) =>
      new Date(hotel.doingtime) > new Date(latest.doingtime) ? hotel : latest,
    hotels[0]
  );

  res.status(200).json({
    RespCode: 200,
    RespMessage: "success",
    Result: {
      Data: hotels.map((hotel) => ({
        id: hotel.id,
        name: hotel.name,
        price: hotel.price,
        doingtime: hotel.doingtime,
      })),
      Dashboard: {
        AllHotel: totalHotels,
        Price: {
          High: highestPriceHotel.name,
          Low: lowestPriceHotel.name,
        },
        LastHotelAdd: lastHotelAdded.doingtime,
      },
    },
  });
});
