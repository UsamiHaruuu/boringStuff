import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Checkbox } from "@material-ui/core";
import { GoPrimitiveDot } from "react-icons/go";

const columns = [
  {
    id: "status",
    label: "Status",
    minWidth: 30,
    align: "center",
    format: value => value.toLocaleString()
  },
  { id: "name", label: "Name", minWidth: 170, align: "left" },
  { id: "email", label: "Email", minWidth: 100, align: "left" },
  {
    id: "phone",
    label: "Phone",
    minWidth: 100,
    align: "left"
  },
  {
    id: "lastPurchase",
    label: "Last Purchased",
    minWidth: 170,
    align: "left"
  },
  {
    id: "piecesBoughtYear",
    label: "Pieces Bought This Year",
    minWidth: 200,
    align: "center",
    format: value => value.toLocaleString()
  },
  {
    id: "piecesBoughtTotal",
    label: "Pieces Bought Total",
    minWidth: 170,
    align: "center",
    format: value => value.toLocaleString()
  }
];
const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 440
  },
  selected: {
    backgroundColor: "#3b05"
  }
});

const StickyHeadTable = ({ Data, tableContact, setTableContact }) => {
  const classes = useStyles();
  Data.map(data => {
    if (data.status === "G") data.status = "Z";
  });
  let rows = Data.sort(
    (a, b) => a.status.charCodeAt(0) - b.status.charCodeAt(0)
  );
  rows.map(data => {
    if (data.status === "Z") data.status = "G";
  });
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  console.log(Data);
  const handleSelectAllClick = rows => {
    let names = [];
    rows.map(row => names.push(row.name));
    tableContact.length === rows.length
      ? setTableContact([])
      : setTableContact(names);
  };
  const handleClick = name => {
    !tableContact.includes(name)
      ? setTableContact([...tableContact, name])
      : setTableContact(
          tableContact.filter(contactName => contactName !== name)
        );
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  onClick={() => handleSelectAllClick(rows)}
                  checked={tableContact.length === rows.length}
                  inputProps={{ "aria-label": "select all contacts" }}
                />
              </TableCell>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow
                    className={
                      tableContact.includes(row.name) ? classes.selected : null
                    }
                    clickable
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        inputProps={{ "aria-labelledby": "test" }}
                        onClick={() => {
                          handleClick(row.name);
                        }}
                        checked={tableContact.includes(row.name)}
                      />
                    </TableCell>

                    {columns.map(column => {
                      const value = row[column.id];
                      console.log(value);
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "email" ? (
                            <a href="mailto: {value}">{value}</a>
                          ) : value === "R" ? (
                            <GoPrimitiveDot
                              style={{
                                color: "red",
                                width: "20px",
                                height: "20px",
                                marginTop: "2px"
                              }}
                            />
                          ) : value === "G" ? (
                            <GoPrimitiveDot
                              style={{
                                color: "green",
                                width: "20px",
                                height: "20px",
                                marginTop: "2px"
                              }}
                            />
                          ) : value === "Y" ? (
                            <GoPrimitiveDot
                              style={{
                                color: "orange",
                                width: "20px",
                                height: "20px",
                                marginTop: "2px"
                              }}
                            />
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default StickyHeadTable;
