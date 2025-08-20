const os = require("os");

module.exports.getData = () => {
  try {
    const osInformation = {
      hostname: os.hostname(),
      platform: os.platform(),
      type: os.type(),
      release: os.release(),
    };

    console.log(osInformation);
    return osInformation;
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
