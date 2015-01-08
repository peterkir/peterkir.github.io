# OSGi Bundle Repositories (OBR)


## Eclipse release obrs 

copy the link locations below and reference them like [here](#usage) 

- Eclipse Platform Release 3.8.2/4.2          [xml](eclipse_3.8.2_platform.xml) [gzip](eclipse_3.8.2_platform.xml.gz)
- Eclipse Simultaneous Release Juno 3.8.2/4.2 [xml](eclipse_3.8.2_Juno.xml)     [gzip](eclipse_3.8.2_Juno.xml)
- Eclipse Platform Release 4.4.0              [xml](eclipse_4.4.0_Platform.xml) [gzip](eclipse_4.4.0_Platform.xml.gz)
- Eclipse Simultaneous Release 4.4.0 Luna     [xml](eclipse_4.4.0_Luna.xml)     [gzip](eclipse_4.4.0_Luna.xml.gz)
- Eclipse Platform Release 4.4.1 			  [xml](eclipse_4.4.1_Platform.xml) [gzip](eclipse_4.4.1_Platform.xml.gz)
- Eclipse Simultaneous Release 4.4.1 Luna 	  [xml](eclipse_4.4.1_Luna.xml)     [gzip](eclipse_4.4.1_Luna.xml.gz) 


## <a name="usage">usage</a> sample of an include section for the usage inside bnd/bndtools

put the following section inside your bnd configuration (e.g. ext/repositories.bnd)

    aQute.bnd.deployer.repository.FixedIndexedRepo;\ 
    		name=<name in Repositories View>;\
    		locations=http://peterkir/obr/eclipse_Platform_R-4.4-201406061215.xml,\
            cache=${workspace}/cnf/cache/R-4.4-201406061215


## how where these repositories created

- p2 repositories have been mirrored locally
- executed bindex command with the following call

<pre><code>
    java -jar bindex.jar
    -t http://download.eclipse.org/eclipse/updates/4.4/R-4.4-201406061215%p/%f
    -d file:/F:/www/download.eclipse.org/eclipse/updates/4.4/R-4.4-201406061215
    -r obr/eclipse_Platform_R-4.4-201406061215.xml
    -v
    -stylesheet http://www.osgi.org/www/obr2html.xsl
    F:/www/download.eclipse.org/eclipse/updates/4.4/R-4.4-201406061215
</code></pre>
