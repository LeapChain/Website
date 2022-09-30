type Props = {
  children: JSX.Element
}

export const PageLayout = ({ children }: Props) => (
  <div className="px-4">{children}</div>
)