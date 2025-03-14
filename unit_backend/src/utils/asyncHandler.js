export const asyncHandler = (fn) => async (req, res) => {
  try {
    await fn(req, res);
  } catch (error) {
    res.status(500).json({
      RespCode: 500,
      RespMessage: "Internal Server Error",
      error: error.message,
    });
  }
};
