const PortfolioData = require('../models/PortfolioData');

const getPortfolioData = async (req, res) => {
  try {
    const data = await PortfolioData.findOne(); // Assumes single document
    if (!data) {
      return res.status(404).json({ error: 'Portfolio data not found' });
    }
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getPortfolioData,
};
