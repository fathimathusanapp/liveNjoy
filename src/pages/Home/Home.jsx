import React, { useState } from 'react';
import './Home.css';

const data = {
  under50: {
    meals: [
      {
        time: "Monday",
        food: {
          breakfast: "Puttu with kadala curry + banana",
          lunch: "Red rice with chicken curry + cabbage thoran",
          snack: "Avil milk + roasted peanuts",
          dinner: "Chapati with paneer masala + salad"
        }
      },
      {
        time: "Tuesday",
        food: {
          breakfast: "Avil milk with peanuts + boiled egg",
          lunch: "Parotta with beef curry",
          snack: "Banana fritters (pazham pori)",
          dinner: "Wheat dosa with chutney + sambar"
        }
      },
      {
        time: "Wednesday",
        food: {
          breakfast: "Uzhunnu dosa with chutney and sambar",
          lunch: "Rice, dal, egg roast + beetroot thoran",
          snack: "Peanut chikki + milk",
          dinner: "Idiyappam with mutta curry"
        }
      },
      {
        time: "Thursday",
        food: {
          breakfast: "Bread toast with butter + banana shake",
          lunch: "Ghee rice with chicken fry + cucumber raita",
          snack: "Boiled chana + tea",
          dinner: "Oats porridge with grated coconut"
        }
      },
      {
        time: "Friday",
        food: {
          breakfast: "Wheat upma with vegetables & boiled egg",
          lunch: "Red rice, sambar, omelette, avial",
          snack: "Dates + banana milkshake",
          dinner: "Chapati with egg curry + salad"
        }
      },
      {
        time: "Saturday",
        food: {
          breakfast: "Banana shake + egg sandwich",
          lunch: "Rice with fish curry + pumpkin thoran",
          snack: "Ragi malt + boiled peanuts",
          dinner: "Chapati with mixed veg curry"
        }
      },
      {
        time: "Sunday",
        food: {
          breakfast: "Idiyappam with mutta curry",
          lunch: "Biriyani (chicken) + salad",
          snack: "Payasam + banana",
          dinner: "Dosa with chutney + egg roast"
        }
      }
    ],
    workouts: [
      {
        name: "Squats",
        reps: "30 × 2",
        benefit: "Strengthens thighs, hips, and glutes",
        image: "/assets/squats.png",
        steps: [
          "Stand with feet shoulder-width apart",
          "Lower hips as if sitting",
          "Keep back straight, core tight",
          "Stand up and repeat"
        ]
      },
      {
        name: "Push-ups",
        reps: "15 × 2",
        benefit: "Builds chest, shoulders, and core strength",
        image: "/assets/pushups.png",
        steps: [
          "Place hands shoulder-width apart",
          "Lower body until chest nearly touches ground",
          "Keep body in a straight line",
          "Push back up"
        ]
      },
      {
        name: "Jumping Jacks",
        reps: "1 min × 3",
        benefit: "Great cardio for warming up & burning fat",
        image: "/assets/jumpingjacks.png",
        steps: [
          "Stand straight with feet together",
          "Jump while spreading legs and raising arms",
          "Return to start and repeat quickly"
        ]
      },
      {
        name: "High Knees",
        reps: "30 sec × 3",
        benefit: "Boosts heart rate and warms up lower body",
        image: "/assets/highknees.png",
        steps: [
          "Stand tall with feet hip-width apart",
          "Quickly drive your knees up toward your chest",
          "Alternate legs rapidly while pumping arms",
          "Maintain pace and posture"
        ]
      }
    ],
    water: "Drink 2–2.5 litres per day"
  },

  "50to70": {
    meals: [
      {
        time: "Monday",
        food: {
          breakfast: "Idli with sambar and coconut chutney",
          lunch: "Brown rice with avial and grilled fish",
          snack: "Buttermilk + roasted chana",
          dinner: "Chapati with veg kurma"
        }
      },
      {
        time: "Tuesday",
        food: {
          breakfast: "Oats porridge with almonds",
          lunch: "Chapati with chicken curry + cucumber salad",
          snack: "Banana + green tea",
          dinner: "Vegetable stew + 2 dosa"
        }
      },
      {
        time: "Wednesday",
        food: {
          breakfast: "Appam with vegetable stew",
          lunch: "Rice with dal, egg curry + beans thoran",
          snack: "Peanut chikki + lime juice",
          dinner: "Upma with chutney"
        }
      },
      {
        time: "Thursday",
        food: {
          breakfast: "Bread + peanut butter + boiled egg",
          lunch: "Red rice, fish curry + beetroot thoran",
          snack: "Fruits + dry nuts",
          dinner: "Chapati + tomato curry"
        }
      },
      {
        time: "Friday",
        food: {
          breakfast: "Vegetable pulao with curd",
          lunch: "Chapati with paneer masala + salad",
          snack: "Dates + milk",
          dinner: "Vegetable soup + 1 roti"
        }
      },
      {
        time: "Saturday",
        food: {
          breakfast: "Ragi dosa with sambar",
          lunch: "Rice, rasam, omelette + stir-fried veggies",
          snack: "Fruit bowl + almonds",
          dinner: "Idli with chutney"
        }
      },
      {
        time: "Sunday",
        food: {
          breakfast: "Poha with vegetables and boiled egg",
          lunch: "Ghee rice with chicken masala + salad",
          snack: "Green tea + banana",
          dinner: "Oats kanji + thoran"
        }
      }
    ],
    workouts: [
      {
        name: "Lunges",
        reps: "20 × 2",
        benefit: "Tones legs and glutes",
        image: "/assets/lunges.png",
        steps: [
          "Step forward with one leg",
          "Lower hips until knees are at 90°",
          "Push back to standing position",
          "Repeat with other leg"
        ]
      },
      {
        name: "Mountain Climbers",
        reps: "30 sec × 3",
        benefit: "Burns belly fat and boosts stamina",
        image: "/assets/mountainclimbers.png",
        steps: [
          "Start in plank position",
          "Bring one knee toward your chest",
          "Alternate legs rapidly",
          "Keep back flat and core tight"
        ]
      },
      {
        name: "Russian Twists",
        reps: "20 reps × 3",
        benefit: "Improves core strength and balance",
        image: "/assets/russiantwist.png",
        steps: [
          "Sit with knees bent and feet lifted",
          "Lean back slightly and clasp hands together",
          "Twist your torso left to right",
          "Engage your core while moving"
        ]
      },
      {
        name: "Burpees",
        reps: "10 reps × 3",
        benefit: "Full-body fat burning exercise",
        image: "/assets/burpees.png",
        steps: [
          "Squat down and place hands on floor",
          "Kick feet back into push-up position",
          "Do one push-up, jump feet forward",
          "Jump up with arms overhead"
        ]
      }
    ],
    water: "Drink 2.5–3 litres per day"
  },

  over70: {
    meals: [
      {
        time: "Monday",
        food: {
          breakfast: "Ragi porridge with banana",
          lunch: "Red rice with sambar + cucumber salad",
          snack: "Green tea + roasted chana",
          dinner: "Chapati with vegetable stew"
        }
      },
      {
        time: "Tuesday",
        food: {
          breakfast: "Oats with skim milk + flax seeds",
          lunch: "Brown rice with spinach thoran + rasam",
          snack: "Buttermilk + dry fruits",
          dinner: "Vegetable soup + toast"
        }
      },
      {
        time: "Wednesday",
        food: {
          breakfast: "Oats idli with chutney",
          lunch: "Chapati with lauki curry + curd",
          snack: "Cucumber + mint water",
          dinner: "Ragi kanji with small banana"
        }
      },
      {
        time: "Thursday",
        food: {
          breakfast: "Vegetable sandwich + green tea",
          lunch: "Rice with moru curry + stir-fried beans",
          snack: "Papaya slices + water",
          dinner: "Upma with veggies"
        }
      },
      {
        time: "Friday",
        food: {
          breakfast: "Chapati with lauki curry and curd",
          lunch: "Oats rice + beetroot thoran + dal",
          snack: "Tender coconut water + nuts",
          dinner: "Vegetable stew + roti"
        }
      },
      {
        time: "Saturday",
        food: {
          breakfast: "Steamed veggies + dal soup + 1 roti",
          lunch: "Red rice + avial + thoran",
          snack: "Apple slices + cinnamon water",
          dinner: "Multigrain kanji + pickle"
        }
      },
      {
        time: "Sunday",
        food: {
          breakfast: "Broken wheat upma with peas and carrot",
          lunch: "Chapati with veg kurma",
          snack: "Buttermilk + 5 almonds",
          dinner: "Soup + boiled vegetables"
        }
      }
    ],
    workouts: [
      {
        name: "Brisk Walk",
        reps: "30 mins",
        benefit: "Boosts cardiovascular health",
        image: "/assets/briskwalk.png",
        steps: [
          "Walk at a steady, quick pace",
          "Keep arms swinging naturally",
          "Maintain upright posture",
          "Breathe deeply and rhythmically"
        ]
      },
      {
        name: "Plank",
        reps: "30 sec × 3",
        benefit: "Core strengthening",
        image: "/assets/plank.png",
        steps: [
          "Place forearms on floor, elbows under shoulders",
          "Keep body in straight line",
          "Tighten core, glutes, and legs",
          "Hold position"
        ]
      },
      {
        name: "Wall Sits",
        reps: "30 sec × 3",
        benefit: "Strengthens thighs and calves",
        image: "/assets/wallsit.png",
        steps: [
          "Stand with back against wall",
          "Slide down until knees are 90°",
          "Hold the position, keep back flat",
          "Keep breathing and stay still"
        ]
      },
      {
        name: "Arm Circles",
        reps: "1 min each direction",
        benefit: "Improves shoulder mobility",
        image: "/assets/armcircles.png",
        steps: [
          "Stand with arms extended sideways",
          "Make small circles forward for 1 min",
          "Then reverse and circle backward",
          "Keep core tight throughout"
        ]
      }
    ],
    water: "Drink 3 litres per day"
  }
};

function Home() {
  const [weightGroup, setWeightGroup] = useState('');

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Welcome to liveNjoy✨..</h1>
            <p>Your simple guide to a healthier, active, and balanced life.</p>
          </div>
          <div className="hero-image">
            <img src="/assets/healthworkout.png" alt="Fitness hero" />
          </div>
        </div>
      </section>

      {/* Daily Wellness Tip */}
      <section className="tips">
        <h2>🌿 Daily Wellness Tip</h2>
        <p>Start your day with a glass of warm water and 5 minutes of deep breathing.</p>
      </section>

      {/* Quick Activities */}
      <section className="activities">
        <h2>🏃 Quick Activities</h2>
        <div className="cards">
          <div className="card">
            <h3>Stretch</h3>
            <p>3-minute morning full-body stretch routine</p>
          </div>
          <div className="card">
            <h3>Walk</h3>
            <p>20-minute walk after meals to aid digestion</p>
          </div>
          <div className="card">
            <h3>Hydrate</h3>
            <p>Track your water intake throughout the day</p>
          </div>
        </div>
      </section>

      {/* Weight Based Wellness Section */}
      <section className="weight-wellness">
        <h2>⚖️ Personalized Wellness</h2>
        <label htmlFor="weight-select">Select Your Weight Group:</label>
        <select
          id="weight-select"
          onChange={(e) => setWeightGroup(e.target.value)}
          value={weightGroup}
        >
          <option value="">-- Select --</option>
          <option value="under50">Under 50kg</option>
          <option value="50to70">50–70kg</option>
          <option value="over70">Over 70kg</option>
        </select>

        {weightGroup && (
          <div className="wellness-box">
            <h3>🥗 Food Plan</h3>
            <ul>
                 {data[weightGroup]?.meals.map((item, i) => (
                   <li key={i}>
                   <strong>{item.time}</strong><br />
                    🍽️ <strong>Breakfast:</strong> {item.food.breakfast}<br />
                    🍛 <strong>Lunch:</strong> {item.food.lunch}<br />
                    🍪 <strong>Snack:</strong> {item.food.snack}<br />
                   🌙 <strong>Dinner:</strong> {item.food.dinner}
                  </li>
                  ))}
               </ul>


            <h3>💧 Water Intake</h3>
            <p>{data[weightGroup]?.water}</p>

            <h3>💪 Detailed Workout Plan</h3>
            <div className="exercise-grid">
              {data[weightGroup]?.workouts.map((exercise, i) => (
                <div key={i} className="exercise-card">
                  <img src={exercise.image} alt={exercise.name} />
                  <h3>{exercise.name} ({exercise.reps})</h3>
                  <p><strong>Benefit:</strong> {exercise.benefit}</p>
                  <ul>
                    {exercise.steps.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
