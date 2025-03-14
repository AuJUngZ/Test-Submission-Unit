import {
  createHotel,
  findHotels,
  searchHotelsByDate,
} from "../repositories/hotelRepository.js";

export const createHotelService = async (name, price) => {
  return await createHotel({ name, price });
};

export const listHotelsService = async (id) => {
  return await findHotels(id);
};

export const searchHotelsService = async (date) => {
  const startDate = new Date(date + "T00:00:00.000Z");
  const endDate = new Date(date + "T23:59:59.999Z");

  return await searchHotelsByDate(startDate, endDate);
};
