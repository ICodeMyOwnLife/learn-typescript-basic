export const observer1 = new ResizeObserver(entries =>
  entries.forEach(({ contentRect, target }) => console.log(contentRect, target))
);
export const observer2 = new window.ResizeObserver(entries =>
  entries.forEach(({ contentRect, target }) => console.log(contentRect, target))
);

export const observer3 = new ReportingObserver(reports =>
  reports.forEach(({ type, body, url }) => console.log(type, body, url))
);
export const observer4 = new window.ReportingObserver(reports =>
  reports.forEach(({ type, body, url }) => console.log(type, body, url))
);
