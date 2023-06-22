import React, { FormEvent, useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  age: z
    .number({ invalid_type_error: "Age field is required" })
    .min(18, { message: "Age must be at least 18" }),
})

type FormData = z.infer<typeof schema>

const Form = () => {
  const [person, setPerson] = useState({
    name: "",
    age: "",
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = (data: FormData) => console.log(person)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          type="text"
          id="name"
          value={person.name}
          onChange={(event) =>
            setPerson({ ...person, name: event?.target.value })
          }
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}.</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          type="number"
          id="name"
          value={person.age}
          className="form-control"
          onChange={(event) =>
            setPerson({ ...person, age: parseInt(event?.target.value) })
          }
        />
        {errors.age && <p className="text-danger">{errors.age.message}.</p>}
      </div>

      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  )
}

export default Form
