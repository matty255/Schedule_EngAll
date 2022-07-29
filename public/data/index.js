const schedule = require("./schedule");
const users = require("./user");

const combinedRoutes = {
  schedule: schedule.card,
  monday: schedule.card.monday,
  tuesday: schedule.card.tuesday,
  wednesday: schedule.card.wednesday,
  thursday: schedule.card.thursday,
  friday: schedule.card.friday,
  saturday: schedule.card.saturday,
  sunday: schedule.card.sunday,
  users,
};

module.exports = () => combinedRoutes;
