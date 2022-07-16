import styled from '@emotion/styled'

const Texto = styled.div`
  background-color: #B7322c;
  color: #FFF;
  padding: 12px;
  font-size: 22px;
  text-transform: capitalize;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  text-align: center;
`

export const Error = ({children}) => {
  return (
    <Texto>{children}</Texto>
  )
}
