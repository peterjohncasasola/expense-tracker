import "./App.css"
import { useState } from "react"

import ExpenseForm from "./expense-tracker/components/ExpenseForm"
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter"
import ExpenseList from "./expense-tracker/components/ExpenseList"

import categories from "./expense-tracker/categories"

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("")

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Expense 1", amount: 10, category: "Utilities" },
    { id: 2, description: "Expense 2", amount: 7, category: "Utilities" },
    { id: 3, description: "Expense 3", amount: 25, category: "Utilities" },
    { id: 4, description: "Expense 4", amount: 15, category: "Utilities" },
  ])

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-2">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
      />
    </div>
  )
}

export default App
