    const today = new Date();
    const setCalendarData = (year, month) => {
      let calHtml = "";
      const setDate = new Date(year, month - 1, 1);
      const firstDayName = setDate.getDay();
      const lastDay = new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        0
      ).getDate();
      const prevLastDay = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();

      let startDayCount = 1;
      let lastDayCount = 1;

      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
          if (i == 0 && j < firstDayName) {
            if (j == 0) {
              // 스타일링을 위한 클래스 추가
              calHtml +=
                `<div style='background-color:#FFB3BB;' class='calendar__day horizontalGutter'><span>${(prevLastDay - (firstDayName - 1) + j)}</span><span></span></div>`;
            } else if (j == 6) {
              // 스타일링을 위한 클래스 추가
              calHtml +=
                `<div style='background-color:#FFB3BB;' class='calendar__day'><span>${(prevLastDay - (firstDayName - 1) + j)}</span><span></span></div>`;
            } else {
              // 스타일링을 위한 클래스 추가
              calHtml +=
                `<div style='background-color:#FFB3BB;' class='calendar__day horizontalGutter'><span>${(prevLastDay - (firstDayName - 1) + j)}</span><span></span></div>`;
            }
          }
          else if (i == 0 && j == firstDayName) {
            if (j == 0) {
              // 스타일링을 위한 클래스 추가
              calHtml +=
                `<div style='background-color:#FFE0BB;' class='calendar__day horizontalGutter'><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
            } else if (j == 6) {
              // 스타일링을 위한 클래스 추가
              calHtml +=
                `<div style='background-color:#FFE0BB;' class='calendar__day'><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
            } else {
              // 스타일링을 위한 클래스 추가
              calHtml +=
                `<div style='background-color:#FFE0BB;' class='calendar__day horizontalGutter'><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
            }
          }
          else if (i == 0 && j > firstDayName) {
            if (j == 0) {
              // 스타일링을 위한 클래스 추가
              calHtml +=
                `<div style='background-color:#FFFFBB' class='calendar__day horizontalGutter'><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
            } else if (j == 6) {
              // 스타일링을 위한 클래스 추가
              calHtml +=
                `<div style='background-color:#FFFFBB' class='calendar__day'><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
            } else {
              // 스타일링을 위한 클래스 추가
              calHtml +=
                `<div style='background-color:#FFFFBB' class='calendar__day horizontalGutter'><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
            }
          }
          else if (i > 0 && startDayCount <= lastDay) {
            if (j == 0) {
              // 스타일링을 위한 클래스 추가
              calHtml +=
                `<div style='background-color:#BBFFC9;'class='calendar__day horizontalGutter verticalGutter'><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
            } else if (j == 6) {
              // 스타일링을 위한 클래스 추가
              calHtml +=
                `<div style='background-color:#BBFFC9;'class='calendar__day verticalGutter'><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
            } else {
              // 스타일링을 위한 클래스 추가
              calHtml +=
                `<div style='background-color:#BBFFC9;'class='calendar__day horizontalGutter verticalGutter'><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
            }
          }
          else if (startDayCount > lastDay) {
            if (j == 0) {
              // 스타일링을 위한 클래스 추가
              calHtml +=
                `<div style='background-color:#B9E1FF;' class='calendar__day horizontalGutter verticalGutter'><span>${lastDayCount++}</span><span></span></div>`;
            } else if (j == 6) {
              // 스타일링을 위한 클래스 추가
              calHtml +=
                `<div style='background-color:#B9E1FF;' class='calendar__day verticalGutter'><span>${lastDayCount++}</span><span></span></div>`;
            } else {
              // 스타일링을 위한 클래스 추가
              calHtml +=
                `<div style='background-color:#B9E1FF;' class='calendar__day horizontalGutter verticalGutter'><span>${lastDayCount++}</span><span></span></div>`;
            }
          }
        }
      }
      document
        .querySelector('calendar')
        .insertAdjacentElement("beforeend", calHtml);
    };

    const setFixDayCount = number => {
      let fixNum = "";
      if (number < 10) {
        fixNum = "0" + number;
      } else {
        fixNum = number;
      }
      return fixNum;
    };

    if (today.getMonth() + 1 < 10) {
      setCalendarData(today.getFullYear(), "0" + (today.getMonth() + 1));
    } else {
      setCalendarData(today.getFullYear(), "" + (today.getMonth() + 1));
    }