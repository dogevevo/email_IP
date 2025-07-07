// export default function handler(req, res) {
//   const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;
//   console.log("IP del remitente:", ip);
//   console.log("Datos del formulario:", req.body);
  
//   res.status(200).json({ message: `Tu IP es: ${ip}` });
// }


export default async function handler(req, res) {
  const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;

  // Llama a ipinfo.io con tu token
  // const response = await fetch(`https://ipinfo.io/${ip}?701b0d3e8f3554`);
  // const data = await response.json();
  const response = await fetch(`https://ipinfo.io/${ip}?token=701b0d3e8f3554`);
  const data = await response.json();

  // Opcional: mostrar en consola
  console.log('IP Info:', data);

  res.status(200).json({
    ip: ip,
    location: {
      city: data.city,
      region: data.region,
      country: data.country,
      loc: data.loc,
      org: data.org,
      postal: data.postal,
    },
  });
}
