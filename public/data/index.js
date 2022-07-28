const schedule = require("./schedule");
const users = require("./user");
// TODO: 변수명 변경해야합니다. 임의로 user_

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
