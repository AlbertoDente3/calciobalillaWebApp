import React, { useEffect, useState } from "react";

export default function ClockComponent() {
  const [dateShown, setDateShown] = useState(new Date());

  useEffect(() => {
    console.log("ho girato all avvio");
  }, []);

  return <div> {dateShown.toLocaleDateString()} </div>;
}
