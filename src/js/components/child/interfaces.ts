import React from "react"

export interface ChildProps {
  id: string
  name: string
  age: string

  onDeleteChild: (id: string) => void
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
