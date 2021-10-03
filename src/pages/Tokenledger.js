import Navbar from "../components/Navbar";
import DashboardNav from "../components/DashboardNav";
import Footer from "../components/Footer";
import "./kyc.css";

// mui imports
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// mui table functions
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: 16,
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('23 Sep', 1590, 600, 240, 40),
  createData('24 Sep', 2370, 900, 370, 43),
  createData('24 Sep', 2620, 160, 240, 60),
  createData('27 Sep', 3050, 307, 670, 43),
  createData('29 Sep', 3560, 160, 490, 39),
];

// Tokenledger


export default function Tokenledger() {
  return (

    <>

<Navbar />


<div className="kyc-container">


  <div className="left-side">
    <DashboardNav />
  </div>


  <div className="right-side">

    <div></div>

    <div className="content">


    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1000 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="right">Tokens Held in wallet</StyledTableCell>
            <StyledTableCell align="right">Tokens Staked</StyledTableCell>
            <StyledTableCell align="right">Tokens Unstaked</StyledTableCell>
            <StyledTableCell align="right">Tokens Withdraw</StyledTableCell>
            <StyledTableCell align="right">Airdrops Received</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    <div className="ido-launch">
            <button>APPLY TO LAUNCH YOUR IDO</button>
    </div>


    </div>

    <div></div>

  </div> 
  
</div>

<Footer/>

    </>

  );
}
