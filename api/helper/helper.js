export function responseSuccess(res, message = null, statusCode = 200, data = []) {
  if (!res) return;

  res.status(statusCode).json({
    success: true,
    message: message,
    data: data,
  });
}

export function responseError(res, message = null, statusCode = 400, data = []) {
  if (!res) return;

  res.status(statusCode).json({
    success: false,
    message: message,
    data: data,
  });
}

export const generateOrderId = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let orderId = "";
  for (let i = 0; i < 6; i++) {
    orderId += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return orderId;
};
