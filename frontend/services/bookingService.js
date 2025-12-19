const API = "http://localhost:5000/api";

const authHeader = () => {
  const auth = JSON.parse(localStorage.getItem("auth"));
  return { Authorization: `Bearer ${auth.token}` };
};

export const createBooking = async (data) => {
  const res = await fetch(`${API}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeader()
    },
    body: JSON.stringify(data)
  });
  return res.json();
};

export const getMyBookings = async () => {
  const res = await fetch(`${API}/users/bookings`, {
    headers: authHeader()
  });
  return res.json();
};
