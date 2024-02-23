"use client";

import { Button, Link, Stack, TextField, Typography } from "@mui/material";
import NextLink from "next/link";
import { useFormState } from "react-dom";
import createUser from "./create-user";

export default function Signup() {
  const [state, formAction] = useFormState(createUser, { error: "" });

  return (
    <form action={formAction} className="w-full max-w-xs">
      <Stack spacing={2}>
        <TextField
          name="email"
          label="Email"
          required
          type="email"
          variant="outlined"
          helperText={state?.error}
          error={!!state?.error}
        />
        <TextField
          name="password"
          error={!!state?.error}
          helperText={state?.error}
          required
          label="Password"
          type="password"
          variant="outlined"
        />
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
