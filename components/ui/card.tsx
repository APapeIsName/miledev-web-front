import * as React from "react"
import { clsx } from "clsx" // className을 쉽게 합치기 위한 유틸리티
import "./card.css";

// 'as' prop을 위한 타입 정의
type ElementProps<T extends React.ElementType> = {
  as?: T
} & React.ComponentPropsWithoutRef<T>

function Card<T extends React.ElementType = "div">({
  as,
  className,
  ...props
}: ElementProps<T>) {
  const Component = as || "div"
  return (
    <Component
      data-slot="card"
      className={clsx("card-base", className)} // 기본 클래스와 추가 클래스 병합
      {...props}
    />
  )
}

function CardHeader<T extends React.ElementType = "div">({
  as,
  className,
  ...props
}: ElementProps<T>) {
  const Component = as || "div"
  return (
    <Component data-slot="card-header" className={className} {...props} />
  )
}

function CardTitle<T extends React.ElementType = "h3">({ // 제목이므로 h3를 기본값으로 변경
  as,
  className,
  ...props
}: ElementProps<T>) {
  const Component = as || "h3"
  return <Component data-slot="card-title" className={className} {...props} />
}

function CardDescription<T extends React.ElementType = "div">({
  as,
  className,
  ...props
}: ElementProps<T>) {
  const Component = as || "div"
  return (
    <Component data-slot="card-description" className={className} {...props} />
  )
}

function CardAction<T extends React.ElementType = "div">({
  as,
  className,
  ...props
}: ElementProps<T>) {
  const Component = as || "div"
  return <Component data-slot="card-action" className={className} {...props} />
}

function CardContent<T extends React.ElementType = "div">({
  as,
  className,
  ...props
}: ElementProps<T>) {
  const Component = as || "div"
  return <Component data-slot="card-content" className={className} {...props} />
}

function CardFooter<T extends React.ElementType = "div">({
  as,
  className,
  ...props
}: ElementProps<T>) {
  const Component = as || "div"
  return <Component data-slot="card-footer" className={className} {...props} />
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}