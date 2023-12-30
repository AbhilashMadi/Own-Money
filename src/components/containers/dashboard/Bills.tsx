import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ui/table";
import { Card, CardContent } from "@components/ui/card";
import { FC } from "react";

const Bills: FC = () => {
  return (
    <main className="space-y-2">
      <h4 className="text-gray-400">Upcoming Bills</h4>

      <div>
        <Card>
          <CardContent className="p-2">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Item Description</TableHead>
                  <TableHead>Last Charge</TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="p-3 text-xl text-center text-medium bg-muted rounded-md font-medium space-x-1">
                      <span>DEC</span>
                      <span>31</span>
                    </div>
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Bills;
