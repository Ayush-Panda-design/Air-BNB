const API = "http://localhost:5000/api";

const authHeader = () => {
  const auth = JSON.parse(localStorage.getItem("auth"));
  return auth ? { Authorization: `Bearer ${auth.token}` } : {};
};

export const getAllProperties = async () => {
  const res = await fetch(`${API}/properties`);
  return res.json();
};

export const getPropertyById = async (id) => {
  const res = await fetch(`${API}/properties/${id}`);
  return res.json();
};

export const createProperty = async (data) => {
  const res = await fetch(`${API}/properties`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeader()
    },
    body: JSON.stringify(data)
  });
  return res.json();
};

export const getHostDashboard = async () => {
  const res = await fetch(`${API}/users/host/dashboard`, {
    headers: authHeader()
  });
  return res.json();
};
