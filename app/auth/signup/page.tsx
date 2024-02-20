import { Button, Link, Stack, TextField, Typography } from "@mui/material";
import NextLink from "next/link";

export default function Signup() {
  async function signup(formData: FormData) {
    "use server";

    await fetch("http://localhost:3001/users", {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });
  }

  return (
    <form action={signup} className="w-full max-w-xs">
      <Stack spacing={2}>
        <TextField name="email" label="Email" variant="outlined" />
        <TextField name="password" label="Password" variant="outlined" />
        <Button type="submit" variant="contained">
          Signup
        </Button>
        <Link component={NextLink} href="/auth/login" className="self-center">
          Login
        </Link>
      </Stack>
    </form>
  );
}
