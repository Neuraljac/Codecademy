const getSleepHours = day => {
    day = day.toLowerCase();
    if (day === 'sunday') {
      return 10;
    } else if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
      return 5;
    } else if (day === 'wednesday') {
      return 4;
    } else if (day === 'thursday') {
      return 6;
    } else if (day === 'friday') {
      return 7;
    } else if (day === 'saturday') {
      return 10;
    }
  };
  
  const getActualSleepHours = () => {
    const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    let totalSleepHours = 0;
  
    for (const day of daysOfWeek) {
      totalSleepHours += getSleepHours(day);
    }
  
    return totalSleepHours;
  };
  
  const userTotalSleepHours = getActualSleepHours();
  console.log(userTotalSleepHours);
  
  const getIdealSleepHours = () => {
    const idealHours = 8; // Change this to your preferred ideal hours per night
    return idealHours * 7; // Multiply by 7 to get the total hours per week
  };
  
  const idealSleepHours = getIdealSleepHours();
  console.log(idealSleepHours);
  
  // Test getActualSleepHours
  const userTotalSleepHoursTest = getActualSleepHours();
  console.log(`Actual sleep hours: ${userTotalSleepHoursTest} hours`);
  
  // Test getIdealSleepHours
  const idealSleepHoursTest = getIdealSleepHours();
  console.log(`Ideal sleep hours: ${idealSleepHoursTest} hours`);
  
  