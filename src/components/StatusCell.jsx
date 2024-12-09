import { Button } from "../components/ui/button"
import {
  MenuContent,
  MenuItem,
  MenuItemCommand,
  MenuRoot,
  MenuTrigger,
} from "../components/ui/menu"

const Demo = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Open
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="new-txt-a">
          New Text File <MenuItemCommand>⌘E</MenuItemCommand>
        </MenuItem>
        <MenuItem value="new-file-a">
          New File... <MenuItemCommand>⌘N</MenuItemCommand>
        </MenuItem>
        <MenuItem value="new-win-a">
          New Window <MenuItemCommand>⌘⇧N</MenuItemCommand>
        </MenuItem>
        <MenuItem value="open-file-a">
          Open File... <MenuItemCommand>⌘O</MenuItemCommand>
        </MenuItem>
        <MenuItem value="export-a">
          Export <MenuItemCommand>⌘S</MenuItemCommand>
        </MenuItem>
      </MenuContent>
    </MenuRoot>
  )
}
