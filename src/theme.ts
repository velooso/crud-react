import { ptBR as MaterialLocale } from "@mui/material/locale"
import { createTheme } from "@mui/material/styles"
import { ptBR} from '@mui/material/locale';

export const theme = createTheme(
  {
    palette: {
      mode: "dark",
    },
  },
  ptBR,
  MaterialLocale,
)