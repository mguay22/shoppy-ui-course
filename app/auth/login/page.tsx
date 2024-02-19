import { Button, Stack, TextField, Typography } from "@mui/material";

export default function Login() {
  return (
    <Stack spacing={2} className="w-full max-w-xs">
      <TextField label="Email" variant="outlined" />
      <TextField label="Password" variant="outlined" />
      <Button variant="contained">Login</Button>
    </Stack>
  );
}
