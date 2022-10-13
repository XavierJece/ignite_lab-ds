import { Envelope, Lock } from "phosphor-react";
import { Button } from "./components/button";
import { Checkbox } from "./components/checkbox";
import { Heading } from "./components/heading";
import { Logo } from "./components/logo";
import { Text } from "./components/text";
import { TextInput } from "./components/textInput";
import "./styles/global.css";

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>

      <form className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input id="password" type="email" placeholder="*******" />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text
          size="sm"
          className="text-gray-400 underline hover:text-gray-200"
          asChild
        >
          <a href="#forget-password">Esqueceu sua senha?</a>
        </Text>

        <Text
          size="sm"
          className="text-gray-400 underline hover:text-gray-200"
          asChild
        >
          <a href="#register">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  );
}
