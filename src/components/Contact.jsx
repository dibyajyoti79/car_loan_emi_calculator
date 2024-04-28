import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export function Contact() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
      message: (value) => value.trim().length === 0,
    },
  });

  return (
    <form
      onSubmit={form.onSubmit(() => {
        const enquiryData = form.values;
        const subject = `${enquiryData.subject}`;
        const body = `Name: ${enquiryData.name}%0D%0AEmail:${enquiryData.email}%0D%0A${enquiryData.message}`;

        window.location.href = `mailto:jagannathbehera0244@gmail.com?subject=${subject}&body=${body}`;
      })}
      id="contact"
      className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
    >
      <Title
        order={2}
        size="h1"
        style={{ fontFamily: "Greycliff CF, var(--mantine-font-family)" }}
        fw={900}
        ta="center"
      >
        Get in touch
      </Title>

      <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
        <TextInput
          label="Name"
          placeholder="Your name"
          name="name"
          variant="filled"
          {...form.getInputProps("name")}
        />
        <TextInput
          label="Email"
          placeholder="Your email"
          name="email"
          variant="filled"
          {...form.getInputProps("email")}
        />
      </SimpleGrid>

      <TextInput
        label="Subject"
        placeholder="Subject"
        mt="md"
        name="subject"
        variant="filled"
        {...form.getInputProps("subject")}
      />
      <Textarea
        mt="md"
        label="Message"
        placeholder="Your message"
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        variant="filled"
        {...form.getInputProps("message")}
      />

      <Group justify="center" mt="xl">
        <Button type="submit" size="md" color="teal">
          Send message
        </Button>
      </Group>
    </form>
  );
}
