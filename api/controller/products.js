import { responseError, responseSuccess } from "../helper/helper.js";
import { getProductCollection } from "../model/model.js";

export const getProducts = async (req, res) => {
  try {
    const ProductCollection = await getProductCollection();
    const product = await ProductCollection.find().toArray();
    responseSuccess(res, "Data product berhasil didapat", 200, product);
  } catch (error) {
    // console.error("Error fetching product", error);
    responseError(res, "Terjadi kesalahan", 400, null);
  }
};
