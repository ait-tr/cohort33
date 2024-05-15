посмотреть историю текущих коммитов c доп инфо

```powershell
git log
```

посмотреть историю текущих коммитов коротко

```powershell
git log --oneline
```

посмотреть всю историю коммитов (не только текущую)

```powershell
git reflog
```

посмотреть код коммита

```powershell
git checkout <code>
```

удалить коммит из истории

```powershell
git revert <code>
```

отменить историю до коммита с изменением файлов в рабочем каталоге

```powershell
git reset --hard <code>
```

снять индексацию файлов

```powershell
git rm -r --cached .
```
