import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "CBD Crema Oil",
      img: "https://m.media-amazon.com/images/I/51qFr4R2a5S._AC_SY879_.jpg",
      customer: "John Smith",
      date: "1 de Marzo",
      amount: 785,
      method: "Pago en Envío",
      status: "Aprobado",
    },
    {
      id: 2235235,
      product: "CBD Oil Aceite",
      img: "https://m.media-amazon.com/images/I/51n+0BRvrLL._SX466_.jpg",
      customer: "Michael Doe",
      date: "1 de Marzo",
      amount: 900,
      method: "Pago Online",
      status: "Pendiente",
    },
    {
      id: 2342353,
      product: "CBD Cápsulas",
      img: "https://m.media-amazon.com/images/I/71y7+wYt9mL._AC_SX679_PIbundle-2,TopRight,0,0_SH20_.jpg",
      customer: "John Smith",
      date: "1 de Marzo",
      amount: 35,
      method: "Pago en Envío",
      status: "Pendiente",
    },
    {
      id: 2357741,
      product: "Grass Burn CBD",
      img: "https://m.media-amazon.com/images/I/81Ew1Ibzq8L._AC_SX679_.jpg",
      customer: "Jane Smith",
      date: "1 de Marzo",
      amount: 920,
      method: "Online",
      status: "Aprobado",
    },
    {
      id: 2342355,
      product: "Palmer Cocca CBD",
      img: "https://m.media-amazon.com/images/I/71jKZyA1FUL._SY879_.jpg",
      customer: "Harold Carol",
      date: "1 de Marzo",
      amount: 2000,
      method: "Online",
      status: "Pendiente",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID de Rastreo</TableCell>
            <TableCell className="tableCell">Producto</TableCell>
            <TableCell className="tableCell">Cliente</TableCell>
            <TableCell className="tableCell">Fecha</TableCell>
            <TableCell className="tableCell">Cantidad</TableCell>
            <TableCell className="tableCell">Método de Pago</TableCell>
            <TableCell className="tableCell">Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
