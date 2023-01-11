import "../styling/bookingForm.css";
const BookingForm = () => {
  const availableTime = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  return (
    <div className="formContainer">
      <form style={{ display: "grid", maxWidth: "400px", gap: "20px" }}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time ">
          {availableTime.map((time) => (
            <option>{time}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
};
export default BookingForm;
