import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import AdminNavBar from "../../components/AdminComponents/AdminNavBar";
import AdminDrawer from "../../components/AdminComponents/AdminDrawer";
import { Divider } from "@mui/material";

import { getAllCategories } from "../../actions/categoryAction";
import { getAllSubCategories } from "../../actions/subCategoryAction";

import { useSelector, useDispatch } from "react-redux";

function createData(sr, name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const AdminCategory = () => {
  const dispatch = useDispatch();
  const categoryData = useSelector((state) => state.categoryData);
  const subCategoryData = useSelector((state) => state.subCategoryData);

  const filterSubCat = subCategoryData.data.filter(
    (v) => v.categories[0].category_id === categoryData?.data?._id
  );

  console.log(filterSubCat);

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllSubCategories());
  }, []);
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AdminNavBar />
        <AdminDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Typography variant="h4">Categories</Typography>
          <Divider sx={{ mb: 5 }} />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">sr.</TableCell>
                  <TableCell>Category Name</TableCell>
                  <TableCell align="right">Sub-Categories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categoryData.data.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.category_name}
                    </TableCell>
                    <TableCell align="right">
                      {filterSubCat?.category_id}
                    </TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default AdminCategory;
