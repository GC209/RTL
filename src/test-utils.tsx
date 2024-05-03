import React, {ReactElement} from 'react'
import {render, RenderOptions} from '@testing-library/react'
import { Appproviders } from './providers/app-providers'


const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: Appproviders, ...options})

export * from '@testing-library/react'
export {customRender as render}