const mongoose = require('mongoose');

const PortfolioDataSchema = new mongoose.Schema({
  about: {
    headline: String,
    title: String,
    tagline: String,
    description: String,
    education: {
      degree: String,
      institution: String,
      period: String,
      details: String,
    },
    experience: {
      role: String,
      company: String,
      period: String,
      highlights: [String],
    }
  },
  skills: [
    {
      category: String,
      icon: String, // lucide icon name or react-icon name as a string
      items: [
        {
          name: String,
          level: Number, // 1-100 for progress bars
        }
      ]
    }
  ],
  projects: [
    {
      title: String,
      description: String,
      tags: [String],
      github: String,
      live: String,
      image: String,
    }
  ],
  certifications: [
    {
      title: String,
      issuer: String,
      date: String,
    }
  ],
  achievements: [
    {
      title: String,
      event: String,
      description: String,
      details: String,
    }
  ]
});

module.exports = mongoose.model('PortfolioData', PortfolioDataSchema);
