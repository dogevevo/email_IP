export default function handler(req, res) {
  const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;
  console.log("IP del remitente:", ip);
  console.log("Datos del formulario:", req.body);
  
  res.status(200).json({ message: `Tu IP es: ${ip}` });
}
