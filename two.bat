:: ¿ÓµùµÄdos,ÕæTM²Ùµ°...
@cls
@echo go to test
@git checkout test
@echo done
@echo start pull min
@git pull origin min
@echo pull min done
@echo ~~~~~~~~~~tags~~~~~~~~~
@git tag
@echo ~~~~~~~~~~~~~~~~~~~~~~~
@git tag > tags.txt
:re
@set /p tags=please enter tag:
@findstr "%tags%" "tags.txt"
@if %errorlevel% == 0 echo has same & goto re
@del /f /s tags.txt
@echo ~~~~~~~~static~~~~~~~~~
@echo tag:         %tags%
@echo ~~~~~~~~~~~~~~~~~~~~~~~
@set /p sure=are you sure push this on test?
@if not %sure% == y echo exit & go end
@git tag %tags%
@git push origin test --tags
:end