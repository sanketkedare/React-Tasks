import React, { useCallback, useState } from "react";
import SingleGun from "./SingleGun";

/**
 * ShootingGuns Component
 *
 * This component simulates shooting actions with three types of guns:
 * - Normal Gun: Fires every time the button is clicked, without restrictions.
 * - Throttling Gun: Fires at most once every 2 seconds, even if the button is clicked multiple times.
 * - Debouncing Gun: Fires only after 2 seconds of inactivity, meaning it ignores rapid clicks.
 *
 * The "Shoot Here" button allows the user to trigger all three guns, demonstrating
 * how throttling and debouncing techniques work by showing distinct shot counts for each.
 *
 * State:
 * - totalShots: Tracks shots fired by the Normal Gun.
 * - throttleShots: Tracks shots fired by the Throttling Gun.
 * - debounceShots: Tracks shots fired by the Debouncing Gun.
 *
 * Functions:
 * - handleBulletShot: Handles button click, updating the shot counts.
 * - handleThrottle: Implements throttling (limits firing frequency).
 * - handleDebounce: Implements debouncing (waits for inactivity before firing).
 */

const ShootingGuns = () => {
  // State to track total shots fired
  const [totalShots, setTotalShots] = useState(0);
  // State to track shots fired with throttling mechanism
  const [throttleShots, setThrottleShots] = useState(0);
  // State to track shots fired with debouncing mechanism
  const [debounceShots, setDebounceShots] = useState(0);

  // Timer references for throttling and debouncing
  let throttleTimeout;
  let debounceTimeout;

  // Debounce handler: increments debounceShots after 2 seconds of inactivity
  const handleDebounce = useCallback(() => {
    clearTimeout(debounceTimeout); // Clear previous timer
    debounceTimeout = setTimeout(() => {
      setDebounceShots(debounceShots + 1); // Increment debounce count
    }, 1000);
  }, [debounceShots]);

  // Throttle handler: increments throttleShots at most once every 2 seconds
  const handleThrottle = () => {
    if (throttleTimeout) return; // If timer exists, skip increment
    throttleTimeout = setTimeout(() => {
      setThrottleShots(throttleShots + 1); // Increment throttle count
      clearTimeout(throttleTimeout); // Clear throttle timer
    }, 1000);
  };

  // Main handler for bullet shots: increments totalShots and triggers throttle and debounce
  const handleBulletShot = () => {
    setTotalShots((prev) => prev + 1); // Increment total shots
    handleThrottle(); // Trigger throttled shot
    handleDebounce(); // Trigger debounced shot
  };

  return (
    <div className="w-[80%] m-auto mt-10">
      <h1 className="lg:text-3xl text-xl text-center font-semibold">Shooting Guns</h1>
      <div className="p-2 mt-4 grid lg:grid-cols-4">
        <div className="grid-cols-1 flex flex-row items-center">
          {/* Button to trigger bullet shots */}
          <span className="text-xl">Trigger {" "}</span>
          <span
            onClick={handleBulletShot}
            className="lg:w-[70px] w-[50px] h-[50px] lg:h-[70px] m-2 rounded-full bg-red-400 hover:bg-blue-500 cursor-pointer flex justify-center items-center p-2 text-black font-bold"
          >
          </span>
        </div>

        <div className="lg:col-span-3 ">
          {/* Display for Normal Gun with total shot count */}
          <SingleGun
            type={"Normal Gun"}
            shots={totalShots}
            message={"Shoots every time you click the button."}
          />

          {/* Display for Throttling Gun with throttle shot count */}
          <SingleGun
            type={" Throttling Gun"}
            shots={throttleShots}
            message={"Shoots at most once every 1 seconds, even if you click multiple times." }
          />

          {/* Display for Debouncing Gun with debounce shot count */}
          <SingleGun
            type={"Debouncing Gun"}
            shots={debounceShots}
            message={"Shoots only after 1 seconds of inactivity, ignoring rapid clicks."}
          />
        </div>
      </div>
    </div>
  );
};

export default ShootingGuns;
